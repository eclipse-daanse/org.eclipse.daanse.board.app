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

### E1 — Ersetzt die tsm-`ServiceRegistry` Inversify, oder liegt sie darüber?  ✔ entschieden

**Entschieden: tsm ersetzt Inversify.** `DefaultServiceRegistry` aus
`@eclipse-daanse/tsm` ist die Registry; Inversify bleibt nur als absterbender
Rückfallweg, bis das letzte Paket umgestellt ist.

*Die ursprüngliche Empfehlung lautete umgekehrt — ein Adapter mit
tsm-Schnittstelle über Inversify — und wurde verworfen. Sie stützte sich darauf,
dass „ein Austausch alle Pakete gleichzeitig treffen" würde. Das Argument ist
zirkulär: Die Pakete werden bei der `activate`-Migration ohnehin alle angefasst,
und dabei ist gleichgültig, was hinter `ctx.services` steht. Ein Adapter hätte
die eigentliche Arbeit — die Umstellung der Decorators — nur verschoben und
danach selbst zurückgebaut werden müssen.*

Der Abgleich mit dem, was die Anwendung an Inversify tatsächlich nutzt, stützt
den Wechsel:

| Inversify | Verwendungen | tsm |
|---|---:|---|
| `toConstantValue` | 53 | `register(id, service)` |
| `toSelf` + Scope | 31 | `bindClass(id, ctor, { scope })` |
| `toFactory` | 29 | `register(id, fn)` — einfacher, da der Umweg über eine Factory-Bindung entfällt |
| `toDynamicValue` | 8 | `bind(id, factory, { scope })` |
| `@injectable` / `@inject` | 27 / 57 | eigene Decorators — mechanische Umstellung |
| `multiInject` | 2 | `getAll(idPattern)` mit Wildcard |
| `tagged` / `named` | 2 / 3 | kein Äquivalent — betrifft nur den ungenutzten, auskommentierten `RootService` |

`DefaultServiceRegistry` ist getestet (`ServiceRegistry.test.ts`,
`decorators.test.ts`, `integration.test.ts`) und deckt den benötigten
Funktionsumfang ab. Was für die **Migration** dorthin fehlt, ist als
[Feature Request](./tsm-feature-requests.md) an tsm gemeldet statt lokal umgangen.

### Abhängigkeit auf tsm: lokaler Stand statt npm

Bis tsm final ist, arbeitet die Board App **gegen den lokalen Quellbaum**:

```json
// packages/lib/core/package.json
"@eclipse-daanse/tsm": "link:../../../../EMFTs/tsm"
```

`link:` legt einen Symlink an — Änderungen an tsm wirken nach einem `npm run
build` dort sofort, ohne Veröffentlichung. Sobald tsm auf npm released wird,
tritt an die Stelle wieder eine Versionsangabe.

**Zu beachten:** Die Versionsnummern führen in die Irre. Der lokale Stand
trägt `0.0.1-next.1`, enthält aber deutlich mehr als das veröffentlichte
`0.0.1-next.2` — unter anderem Requirements & Capabilities, ConfigurationAdmin,
Metatype, Komponenten-Decorators sowie beide von uns gemeldeten Punkte:

| unser FR | Umsetzung im lokalen Stand |
|---|---|
| [#17](https://github.com/eclipse-daanse/org.eclipse.daanse.tsm/issues/17) — Manifest-Prüfung im Build | `manifest`-Option am Vite-Plugin, Modi `validate` und `derive` |
| [#18](https://github.com/eclipse-daanse/org.eclipse.daanse.tsm/issues/18) — Warten statt Scheitern | `ModuleState: 'unsatisfied'`, dazu `onServiceBound` / `onServiceUnbound`, `cardinality`, `policy` |

Wer also gegen npm baut, sieht diese Funktionen nicht.

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

### E3 — `nsURI`-Schema  ✔ entschieden

Die 41 Modelle tragen heute Platzhalter wie `http://example.com/baseconnection`.
Vorschlag als verbindliche Konvention:

```
https://eclipse.dev/daanse/board/<bereich>/<paket>/<major.minor>
```

Beispiel: `https://eclipse.dev/daanse/board/connection/rest/1.0`

**Entschieden wurde anders** — siehe A3: die im Projekt bereits vorhandene
Konvention `http://<paketname>` wird durchgezogen, statt ein neues Schema
einzuführen. Ausschlaggebend war, dass 13 Modelle ihr bereits folgen und ein
Wechsel auch `lib/events` samt hartkodierter Konstante und
paketübergreifender Referenz angefasst hätte.

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

**Offene Punkte für einen Beitrag an `@emfts/core`** — ausgearbeitet mit
Minimalbeispielen in [`emfts-feature-requests.md`](./emfts-feature-requests.md):

1. `EOperation`, `EParameter` und Detail-Einträge beim XMI-Laden typisiert
   materialisieren — die `Basic*`-Klassen existieren bereits, der Loader nutzt
   sie an dieser Stelle nur nicht.
2. `registerPackage()` auch auf der Instanz-Registry anbieten; heute existiert
   sie nur auf der über `createPackageRegistry()` erzeugten Variante.
3. **EMF-Generics** (`eGenericType`, `eTypeArguments`) werden vom XMI-Loader
   nicht verstanden. Beim Start der Anwendung meldet die Konsole dutzendfach
   `Unknown feature 'eGenericType' for type 'EReference'`. Betroffen sind acht
   Widget-Modelle (chart, progress, svg/base, svg/repeat, table/pivot,
   text/plain, video, wrapper), die damit `VariableWrapper<T>` typisieren.
   Noch zu klären: ob dadurch Metadaten verlorengehen oder nur die Typparameter
   ignoriert werden.

**Damit zusammenhängend, aber eigenständig:** Die betroffenen `eGenericType`
verweisen auf `org.eclipse.daanse.board.app.ui.vue.composables#//VariableWrapper`.
Für `ui.vue.composables` existiert jedoch gar kein Ecore-Modell — die Referenz
war also schon vor allen Umbauten unauflösbar. Seit A4 liegt `VariableWrapper`
zudem in `lib.variables`. Beim Aufräumen ist beides zusammen zu korrigieren.

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

**Status: erledigt** (Commit `ebb2c8a9`). Entfernt wurden 210 getrackte Dateien mit
33.247 Zeilen; ein Vite-Lib-Build weniger. Damit gibt es nur noch eine
Ecore-Runtime im Projekt.

Mit dem Paket verschwand auch sein Ausschluss aus `.licenserc.yaml`. Der
Lizenz-Nebenbefund aus A1 hat sich dabei bestätigt: das Paket war genau deshalb
vom Header-Check ausgenommen, weil es MPL-2.0-Fremdcode war. Das Repo ist jetzt
durchgängig EPL-2.0.

`lerna.json` und die Workspace-Liste brauchten keine Pflege — beide verwenden
`packages/**`.

**Verifiziert:** keine Referenz mehr in Code oder Konfiguration (verbleibende
Treffer sind Dokumentation und ein historischer Testkommentar), `lib/events` mit
9/9 Tests, `tsc --noEmit` und `vite build` grün, sowie
`turbo run build --filter='...lib.events'` mit **132/132 Tasks erfolgreich** —
einschließlich `app.default`, also der vollständigen Anwendung.

**Beiläufige Beobachtung aus diesem Build**, die S5/S8 beziffert: das
App-Bundle liegt bei **26,6 MB** (5,25 MB gzip) in einem einzigen Chunk. Das ist
die konkrete Größenordnung, an der sich der Nutzen von B5 später messen lässt.

### A3 — `nsURI`-Migration

**Status: erledigt** (Commits `b5b1b2aa`, `fb08cb14`).

**Entscheidung E3 gefallen:** der nsURI beginnt mit `http://<paketname>`;
mehrere Modelle eines Pakets unterscheiden sich durch ein Suffix. Das war
bereits die faktische Konvention von 13 Modellen — darunter `lib/events` samt
seiner paketübergreifenden Referenz —, die deshalb unverändert blieben. Das
ursprünglich vorgeschlagene `eclipse.dev`-Schema hätte alle 40 Modelle plus
Code angefasst, ohne inhaltlichen Gewinn.

Migriert: **27 Modelle und 40 generierte Dateien** (19 × `example.com`,
7 × `www.example.org`, 1 ganz ohne Schema).

**Dabei aufgedeckt und behoben — eine doppelt vergebene Identität:**
`http://example.com/baseconnection` gehörte gleichzeitig `lib/connection/base`
und `lib/datasource/base`. In einer gemeinsamen PackageRegistry hätte eines
das andere verdrängt. Die Zuordnung war über die referenzierten Klassen
eindeutig: `IBaseConnectionConfiguration` → `datasource.base`, die übrigen drei
→ `connection.base`.

**Nebeneffekt, der die Konvention nachträglich rechtfertigt:** Der Generator
leitet auch **Import-Pfade** aus dem nsURI ab. Die bisherigen
`import … from 'example.com/baseconnection'` waren nicht auflösbar und fielen
nur deshalb nie auf, weil es reine Typ-Importe sind. Sie zeigen jetzt auf die
tatsächlichen Pakete, die ohnehin schon als Dependency eingetragen waren.

**Zwei Vorschäden**, aufgedeckt weil die Verifikation die Modelle erstmals
wirklich *lädt* statt sie zu durchsuchen (separat in `b5b1b2aa`): `widget/icon`
fehlte ein `</eClassifiers>`, `widget/map` hatte ein unescaptes `<` in einem
Dokumentationstext. Beide Modelle waren für jeden Parser unlesbar.

**Neu: `test/ecore-models.spec.ts`** sichert die Konvention repo-weit ab —
lädt jedes Modell mit dem echten Loader und prüft Eindeutigkeit der nsURIs,
Schema und Abwesenheit von Platzhaltern.

**Verifiziert:** 4/4 Modelltests, Vollbuild mit **133/133 Turbo-Tasks**
einschließlich `app.default`.

### A4 — Layering-Verletzung auflösen (S10)

**Status: erledigt** (Commit `6a5ee935`). `packages/lib/**` enthält jetzt weder
eine `ui`-Abhängigkeit noch `vue`.

Die Ursache war gemischt, weshalb keine der beiden im Plan angedachten Varianten
allein gereicht hätte: `VariableWrapper` ist **Vue-frei** und hängt nur an
`lib.variables`, `VariableComplexStringWrapper` importiert Vue **zur Laufzeit**.

- `VariableWrapper` wanderte nach `lib/variables`. `ui.vue.composables`
  re-exportiert ihn, damit die rund 38 bestehenden Importstellen — viele davon
  generiert — unverändert gültig bleiben.
- Die Factory kennt `VariableComplexStringWrapper` nicht mehr fest. Sie behandelt
  `VariableWrapper` selbst, weil nur sie das `VariableRepository` für die
  Referenzauflösung hat, und nimmt weitere Typen über
  `registerWrapperType(WrapperTypeI)` entgegen. Die App registriert den
  Vue-gebundenen Wrapper in `main.ts`.

**Verifiziert:** Vollbuild 133/133. Das Bundle schrumpft um 383 kB, weil `lib`
nicht mehr das Vue-Paket mitzieht.

> **Korrektur (bei B3 aufgefallen).** Die ursprünglich hier angeführte
> Laufzeitprüfung war wertlos: Der Dev-Server wurde auf Port 5199 gestartet, den
> zu diesem Zeitpunkt bereits `EMFTs/uimodel-composer/editor` belegte. Geprüft
> wurde also eine fremde Anwendung — erkennbar erst am Seitentitel
> („UIModel & Style Editor" statt „Daanse Floor"). Die Aussage selbst ist
> inzwischen belegt: Bei der B3-Verifikation lief die Board-App mit allen
> A4-Änderungen auf einem freien Port, mountete und registrierte ihre 24
> Widgets. Lehre für weitere Prüfungen: Port mit `--strictPort` erzwingen und
> die Identität der Seite bestätigen, bevor aus ihr etwas geschlossen wird.

**Nebenbefund mit Folgen für B2 — der globale Container ist nicht global.**
Beim Versuch, die umgebaute Factory mit einem Unit-Test abzusichern, zeigte
sich: `lib.core` lieferte kein `exports`-Feld, weshalb Node die UMD-Variante
lud. Nachgerüstet nach dem Muster von `ui.vue.composables`. Der Test scheiterte
dennoch, und die Gegenprobe erklärt warum:

```
esm.container === cjs.container  →  false
```

ESM- und CJS-Build von `lib.core` erzeugen **zwei verschiedene
Container-Instanzen**. In der App fällt das nicht auf, weil dort alles ESM ist —
aber jeder Test-, SSR- oder Node-Kontext bekommt einen zweiten Container. Das
verschärft S4 über das dort Beschriebene hinaus und ist ein zusätzliches
Argument für B2: eine `ServiceRegistry` mit klar definiertem Besitzer statt
eines Modul-Singletons, dessen Identität vom Modulformat abhängt.

Ein Unit-Test der Factory wurde deshalb **nicht** hinterlassen — er wäre nur mit
Kunstgriffen lauffähig gewesen. Er ist nach B3/B4 nachzuholen, wenn die Pakete
nicht mehr beim Import auf den Container zugreifen.

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

**Status: erledigt.** Ergebnis in [`tsm-modulvertrag.md`](./tsm-modulvertrag.md).

Es sind **113 Pakete**, nicht 71 — die frühere Zahl erfasste nur
`container.bind`/`isBound`, nicht die Pakete, die ausschließlich `container.get`
aufrufen. Eingeteilt nach dem Ort des Zugriffs, weil daraus der Aufwand folgt:

| Klasse | n | Bedeutung | Aufwand |
|---|---:|---|---|
| A — nur `bind` | 17 | idempotent, keine Auflösung beim Import | trivial |
| B — `get` in einer Funktion | 62 | faktisch schon ein `activate`, nur selbst aufgerufen | klein |
| C — `get` auf Modulebene | 34 | erzwingt die Ladereihenfolge, Ursache der Race Condition | mittel |

**Der wichtigste Befund: 62 von 113 sind bereits gekapselt.** Für die Mehrheit ist
die Migration eine Umbenennung, kein Umbau. Die 34 kritischen Fälle sind auf vier
Familien konzentriert (`ui/vue/lang`, `ui/vue/datasource`, `ui/vue/composer`,
`ui/vue/connection`) und als gleichförmige Blöcke abzuarbeiten.

**Zweiter Befund, mit Folgen für B3:** Den Registries fehlt überwiegend die
Gegenoperation. `NavigationRegistry`, `RouteRegistry` und i18next können
zurücknehmen; `DatasourceRepository` und `ConnectionRepository` nur Instanzen,
nicht die registrierten Typen; **`WidgetRepository` kann gar nichts zurücknehmen**.
Vor dem Piloten ist deshalb ein `unregisterWidget` zu ergänzen — sonst wäre
`deactivate` eine Attrappe und der Pilot ohne Aussagekraft.

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

**Status: erledigt** (Commits `66c301f4`, `8e42e99d`). Alle drei
Akzeptanzkriterien erfüllt: `main.ts` enthält keinen Widget-Import mehr, die App
startet mit denselben 24 Widgets wie zuvor, und die Rücknahme ist wirksam.

22 Pakete wurden skriptgestützt umgestellt, `page` manuell — dort war der
Selbstaufruf eingerückt, weshalb das Skript es übersprungen statt geraten hat.
`wrapper` und `layout/grid` blieben unberührt, da sie nichts registrieren.

Was das Skript nicht erfassen konnte und im Build auffiel: eine Debug-Zeile mit
`container.isBound` in `map`, 17 tote `console.log(…, container)`, ein
mehrzeiliger Import in `routing`, sowie ein fehlender Re-Export von
`EVENT_ACTIONS_REGISTRY_ID`. Letzterer blieb in den Tests unsichtbar, weil die
seit B3 gegen die Quellen laufen — nur der Build nutzt `dist`. Beide Prüfwege
haben also eigenen Wert.

Nebenbei ergänzt: 20 Widget-Pakete deklarieren `lib.core` jetzt als
Abhängigkeit; sie importierten es zuvor, ohne es zu deklarieren.

### B4 — Restliche Familien nachziehen

Datasource, Connection, Composer, Repository, Persistence, Layout, Variable. Schematisch
nach dem Muster aus B3. Am Ende:

- `main.ts` enthält keine nebenwirkungsgetriebenen Importe mehr
- die Demo-Seiten (`'Seite 1'`, `'Seite 2'`) und die Testaktionen sind aus `main.ts`
  entfernt oder hinter einen Entwicklungsschalter gelegt
- `RootService.activate()` wird entweder benutzt oder gelöscht — der auskommentierte
  Block in `bootstrap.ts` verschwindet

**Stand nach dem ersten Durchgang** (Commits `200cb243`, `064315e5`): 39 Pakete
umgestellt — 11 Sprachmodule, 11 Datenquellen-UI, 6 Verbindungen-UI, 6 Composer,
2 Layouts, 3 Variablentypen. `main.ts` hat 36 Importe weniger, die Demo-Seiten
sind entfernt, `RootService` und `bootstrap.ts` gelöscht.

Ergänzt wurden die fehlenden Gegenstücke `unregisterDatasourceType`,
`unregisterConnectionType` und `unregisterVariableType` sowie String-Dienst-IDs
für acht Registries.

**Die Startreihenfolge ist jetzt benannt statt zufällig.** Drei Phasen:
Grunddienste (i18next, Einstellungen) → Modulaktivierung → Nachlauf
(Endpointfinder, Persistenz). Der Nachlauf setzt registrierte Verbindungs- und
Datenquellentypen voraus; vorher hing das allein daran, in welcher Zeile ein
Import stand. Beim ersten Versuch hatte ich die Phasen falsch verkettet — was
die Abhängigkeit überhaupt erst sichtbar machte.

**Die Brücke musste in beide Richtungen wirken.** Der Rückfallweg deckte nur ab,
dass ein umgestelltes Paket Dienste der übrigen findet. Umgekehrt lesen noch
nicht umgestellte Konsumenten — etwa `DatasourceEditor.vue` für die
Preview-Komponenten — weiterhin über `container.get(Symbol.for(...))`. Die
Registry spiegelt `register` deshalb in den Container und räumt bei `unregister`
mit auf. Ohne das Aufräumen hätte der Rückfallweg den eben entfernten Dienst
weitergeliefert und `deactivate` wäre wirkungslos gewesen.

**Offen: 50 Pakete**, geteilt nach dem, was den Aufwand bestimmt:

| | Anzahl | |
|---|---:|---|
| **ohne** Inversify-Decorators | 21 | mechanisch umstellbar |
| **mit** `@injectable`/`@inject` | 29 | Wechsel des DI-Mechanismus |

Die 29 binden Klassen über Inversifys DI; `services.bindClass()` erwartet
tsm-eigene Decorators. Das ist kein Umbenennen, sondern ein eigener Schritt —
E1 nennt es „mechanische Umstellung", was zutrifft, den Umfang aber
unterschätzt. Unter den 21 sind neun Factory-Muster (`lib/composer`,
`lib/connection`), die `container.get(Klasse)` verwenden; eine Klasse als
Dienst-ID hat in tsm keine Entsprechung und braucht erst eine Konvention. Vier
weitere sind bootstrap-nah.

**Der Hauptgewinn ist erreicht:** Die Reihenfolge-Zwänge sind weg. Was bleibt,
bindet nur oder ist lazy und verursacht keine Race Conditions — dort ist die
Umstellung Vereinheitlichung, nicht Fehlerbehebung.

**Vom Akzeptanzkriterium offen:** `main.ts` ist bei rund 300 Zeilen, nicht unter
100 — dafür müssten die verbleibenden 34 Nebenwirkungsimporte weichen, also die
50 offenen Pakete. Startreihenfolge und Fehlerbehandlung erfüllen das Kriterium.

### B4 — Abschluss: 112 Pakete, ein Startvorgang

Der zweite Durchgang hat die verbleibenden Familien nachgezogen. Der Stand:

| | |
|---|---:|
| Pakete mit `activate` | **112** |
| Nebenwirkungsimporte in `main.ts` | **0** |
| Startphasen | **1** (vorher 3) |
| Dienste, die noch von außen kommen | **2** (`App`, `TINY_EMITTER`) |

**Der Decorator-Wechsel war kleiner als veranschlagt.** Im Plan standen 29
Pakete, „Wechsel des DI-Mechanismus". Tatsächlich gab es im ganzen Projekt
**26 `@inject`-Stellen**; die meisten Pakete trugen nur ein `@injectable()`,
das allein für die Klassenbindung da war und mit ihr entfiel. Welche
Konstante auf welchen Dienst zeigt, wurde über die Importe aufgelöst statt
über den Namen geraten — `identifier` heißt in verschiedenen Paketen
verschieden viel, und einmal habe ich falsch geraten (`Logger` statt
`LoggerFactory`), was der Abgleich aufdeckte.

**Drei Muster deckten fast alles ab:**

| Fall | Rezept |
|---|---|
| Singleton ohne Abhängigkeit | `services.register(ID, new X())` — die Klassenbindung samt `@injectable` entfällt |
| Singleton mit Abhängigkeit | `services.register(ID, services.construct(X))` |
| Factory (`toFactory` + `inTransientScope`) | `services.register(ID, config => { … services.construct(X) … })` |

`construct()` war der Schlüssel: dieselbe Auflösung wie `bindClass()`, aber
ohne Registrierung. Damit geht die fertige Instanz über `register` in die
Registry und wird in den Inversify-Container gespiegelt — bei `bindClass`
wäre die Spiegelung ausgeblieben und die noch nicht umgestellten Konsumenten
hätten nichts gefunden.

**Was die Umstellung sichtbar gemacht hat.** Neun Pakete prüften ihre
Voraussetzung mit `container.isBound(...)` und übersprangen sie bei
Abwesenheit stillschweigend — der Event-Manager verschwand dann aus der
Navigation, Composer-Aktionen fehlten in der Oberfläche, ein Repository-Typ
war nicht angemeldet. Als `requires` deklariert bricht die Aktivierung
stattdessen mit Grund ab.

Ein Fehler ließ sich dabei aufklären, den ich dreimal als vorbestehend
abgehakt hatte: `classConstructor.plugins[i] is not a function` stammt aus
`@octokit/rest` und trat beim Wiederherstellen eines gespeicherten
Git-Repositories auf. Er war nur als unbehandelte Zusage sichtbar, weil der
Persistenz-Loader als `init()` ohne `await` neben dem Start herlief. Als
Pflichtmodul brach er den Start ab — das war der Anlass, genauer hinzusehen.
Der Octokit-Defekt selbst ist offen, aber lokalisiert
(`CommitProvider` in `GitRepositoryImpl.init`).

**Was offen bleibt:**

- `lib.variables` behält die Inversify-Decorators. Seine Klassen werden nicht
  vom Paket selbst erzeugt, sondern per Service Locator
  (`container.get(ComputedStoreParameter)` in `UsesComputedVariable`). Die
  Decorators zu wechseln, ohne die Erzeugung mitzunehmen, würde sie brechen —
  das gehört zur Service-Locator-Auflösung, nicht hierher.
- `lib.module1` ist ein Beispielpaket, dessen `init` niemand aufruft.
- **96 Vue-Dateien** greifen über `container.get(...)` auf Dienste zu. Das ist
  der eigentliche Rest von Inversify und der Gegenstand von §7 des
  Modulvertrags.

### B4a — Die Handsortierung in `modules.ts` auflösen

`ModuleEntry` trägt jetzt `provides` und `requires` — benannt wie im späteren
tsm-Manifest, damit die Angaben 1:1 dorthin wandern. Der Bootstrapper leitet
daraus die Aktivierungsreihenfolge ab, stabil gegenüber der Listenreihenfolge:
Module ohne Abhängigkeit zueinander behalten ihre Position, was die
Widget-Palette unverändert lässt.

**Der Befund, der die Arbeit klein machte:** Von den acht Diensten, die die 75
Module auflösen, stammen sechs aus noch nicht umgestellten Paketen
(`EventRegistry`, `EventActionsRegistry`, `DatasourceRepository`, `I18next`,
`ConnectionRepository`, `VariableRepository`) und kommen über den Rückfallweg.
Innerhalb der Liste bleiben genau **zwei** ordnende Abhängigkeiten:
`WidgetRepository` mit 24 Konsumenten und `LayoutRepository` mit 2. Die
sorgfältig gepflegte Gliederung — Registries, Layouts, Variablen, i18n,
Composer, Verbindungen, Datenquellen, Widgets — bildete eine Komplexität ab,
die es nicht gab. Sie war korrekt, aber überflüssig.

Deshalb gilt für die Sortierung: Dienste ohne Anbieter in der Liste sind
extern und beeinflussen die Reihenfolge nicht. Ein Auflöser, der sie als
Fehler wertete, wäre mitten in einer Migration unbenutzbar.

**Verifikation.** Drei Ebenen, weil die ersten beiden je eine Lücke lassen:

1. *Sortierung:* Permutationstest über alle Anordnungen dreier Module.
   Gegenprobe: ohne die Sortierung werden 5 der 6 neuen Tests rot.
2. *Vollständigkeit der Deklarationen:* Die `requires` sind aus den
   `activate`-Rümpfen abgeleitet — eine fehlende Kante fiele in Test 1 nicht
   auf. Eine unabhängige zweite Ableitung (anderes Muster, alle Quelldateien
   statt nur `index.ts`, Konstanten repoweit aufgelöst) findet keinen nicht
   deklarierten Zugriff.
3. *End-to-End:* Die laufende Anwendung mit **umgekehrter** Modulliste. Ohne
   die Sortierung bricht der Start an `WidgetRepository` ab, mit ihr werden
   75 von 75 Modulen aktiviert.

Ebene 3 hätte ich beinahe verschenkt: Der Dev-Server lädt `lib.core` aus
`dist`, nicht aus `src`. Der erste Durchlauf lief deshalb gegen den alten
Bootstrapper — und wäre als Bestätigung durchgegangen, weil die alphabetische
Liste zufällig schon in gültiger Reihenfolge steht. Erst der Umkehrlauf machte
das sichtbar. Wie schon bei A4 gilt: eine Prüfung, die nur bestätigen kann,
prüft nichts.

**Was bleibt.** Die drei Phasen in `main.ts` bleiben bestehen. Sie hängen
nicht an `modules`, sondern an Paketen, die beim Import Nebenwirkungen haben
(`i18next`, `settings.manager` davor; `endpointfinder`, Persistenz danach).
Sie verschwinden mit deren Umstellung, nicht mit dieser Änderung.

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
