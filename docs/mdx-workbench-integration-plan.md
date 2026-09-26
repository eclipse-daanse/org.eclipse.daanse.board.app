# Integrationsplan: MDX Workbench → Daanse Board App

Stand: 2026-08-03 · Analysierte Quellen:
- Board App: dieses Repo (`packages/**`)
- MDX Workbench: `mdxui2/mdx-workbench` (`@mdx-workbench/{language,workbench,xmla-mock,xmla-soap}`)
- Modulsystem-Referenz: `EMFTs/tsm` (`@eclipse-daanse/tsm`, SPEC v0.2.0)

## 1. Zielbild

1. Die **MDX Workbench ersetzt den bisherigen „MDX Preview“** (`packages/ui/vue/datasource/xmla/src/Preview.vue`): Langium-LSP-Editor (CodeMirror 6) statt Monaco-Monarch, Builder/Query-Designer über dem AST, Metadaten-Baum, Ergebnis-Pane mit Pivot/Drillthrough.
2. Zusätzlich gibt es eine **eigenständige Workbench-Seite** (`/mdx`) mit vollem Funktionsumfang (CST/AST-Ansichten, Function Browser, Discover-Explorer).
3. Die **Board App übernimmt das Workbench-Layout** als App-Shell: schlanke Topbar, Aktivitätsleiste links, per Splitter größenveränderbare Panes, dunkles IDE-Theme (plus Light-Variante), konsistente Design-Tokens.
4. Der Modulschnitt folgt den **tsm-Semantiken** (Manifest, `activate`/`deactivate`, Services über Registry-IDs), wird aber zunächst als normale Workspace-Pakete ausgeliefert — tsm-Manifeste kommen als letzte Phase dazu, ohne dass sich die Schnittlinien ändern.

## 2. Ausgangslage (Kurzfassung der Analyse)

### Board App
- Monorepo (yarn workspaces + turbo + lerna), Pakete in Vite-Lib-Mode, alles Nicht-Relative externalisiert. Reverse-DNS-Namen, Pfad spiegelt Namen.
- DI: ein globaler Inversify-`Container` (`lib/core`), Aktivierung per Side-Effect-Import in `packages/app/default/src/main.ts`.
- Registries: `WidgetRepository`, `DatasourceRepository` (**hier hängt der MDX Preview**: `registerDatasourceType('xmla', {Store, Preview, Settings})`), `ConnectionRepository`, `ROUTE_REGISTRY`, `NAVIGATION_REGISTRY`, `LayoutRepository`.
- Der Preview wird ausschließlich über `Symbol.for('XmlaPreview')` aufgelöst (`app/default/src/components/datasources/DatasourceEditor.vue:51`). Vertrag: Prop `dataSource {uid,name,type,config}` + `emit('updateConfig', config)`.
- MDX-relevant heute: `lib/connection/xmla` (SOAP/XMLA-Client, `XMLAApi`), `lib/datasource/xmla` (`XmlaStore`, `MetadataStorage`, `MdxRequestConstructor`), `ui/vue/common/xmla` (MetadataTree, QueryDesigner, PivotTable), `ui/vue/common/monaco` (Monarch-MDX + Completion — wird für MDX abgelöst, bleibt für SQL).
- Shell: `App.vue` (Vuestic-Sidebar + router-view), `Header.vue` ist faktisch leer, Theming via Tailwind-4-`@theme`-Tokens + Vuestic-Presets.

### MDX Workbench
- `@mdx-workbench/language`: Langium 4.3 Grammatik + LSP im Web Worker, Custom-Protokoll `mdx/setMetadata`, `mdx/documentTree`, `mdx/nodeInfo`, `mdx/structuralEdit`. `protocol.ts` ist ohne Langium-Abhängigkeit importierbar.
- `@mdx-workbench/xmla-mock`: enthält (neben Mock) die **Client-Interfaces** `XmlaDiscoverClient.discover(rowset, restrictions, properties)` und `XmlaExecuteClient.execute(statement, properties)` samt aller Rowset-/Cellset-Typen.
- `@mdx-workbench/xmla-soap`: echter, dependency-freier SOAP-Client (fetch + DOMParser), nach Vorbild von `…lib.connection.xmla` gebaut.
- `@mdx-workbench/workbench`: UI ohne Framework. **Alle Panes sind Factories** `createXView(host, deps, callbacks) → Handle` — bereits host-agnostisch. Der Shell-Monolith ist `main.ts` (1647 Zeilen, `$('#id')`-Verdrahtung gegen `index.html`).
- Pure (DOM-frei, sofort wiederverwendbar): `fragment-builder`, `discover/metadata-browse`, `derive-semantics`, `vega-mapper`, `pivotToMdx`/`PivotConfig`, `lsp/client`.
- Bekannte Embedding-Blocker: globale CSS (`*`, `body`, `#id`-Selektoren, unpräfixte Klassen wie `.hidden`, `.modal`), `document.body`-Modals mit Klassen-Singleton-Dedupe, Modul-Globals (`dnd/drag-state`, `panes/tree-depth`), Vite-spezifischer `?worker`-Import, `location`/`history`-Zugriffe (Share-Link), kein `dispose()` in den Panes, nur Dark-Theme.

### tsm (Modulsystem-Referenz)
- Manifest (`id`,`name`,`version`,`entry` verpflichtend), Lifecycle `activate(context)`/`deactivate(context)`, `ServiceRegistry` (`register`/`bind`/`bindClass`/`getRequired`), `DependencyResolver` (Kahn + semver), Shared Libraries über `window.__tsm__`.
- Konsequenzen für den Schnitt:
  - **Entlang von Service-Grenzen schneiden**, nicht entlang von Dateien — Manifest-`exports` ist praktisch nicht nutzbar, der einzige verlässliche Laufzeitvertrag ist eine Service-ID.
  - **Typen/Interfaces in dependency-freie API-Pakete**, die Provider und Konsument zur Buildzeit einbinden (tsm transportiert keine Typen).
  - `requiresService` ist fatal wenn nicht erfüllt → alles nicht strikt Nötige `optional: true`.
  - Nur eine Version pro Modul-ID zur Laufzeit; keine dynamische Service-Ankunft → Provider (Connection, Language) mit hoher `priority` und expliziten `dependencies[]`.
  - Board App nutzt heute dieselbe Idee statisch: `SetupI.init(container)` ↔ `activate(context)`, Inversify-Container ↔ ServiceRegistry, `Symbol.for(…)` ↔ Service-ID-String. Die Schnittlinien sind für beide Welten identisch.

## 3. Modulschnitt MDX Workbench (Refactoring im Workbench-Repo)

Ziel: aus 4 Paketen werden 6, das UI wird publizierbar und einbettbar.

| Paket (neu/geändert) | Inhalt | Regeln |
|---|---|---|
| `@mdx-workbench/xmla-api` **(neu)** | Nur Interfaces + Typen: `XmlaDiscoverClient`, `XmlaExecuteClient`, `DiscoverRowMap`, alle `MDSCHEMA_*`/`DBSCHEMA_*`-Row-Typen, `XmlaCellset` | Zero Dependencies. Das ist das „API-Paket“ im tsm-Sinn; `xmla-mock` und `xmla-soap` implementieren es. |
| `@mdx-workbench/xmla-mock` | nur noch Mock-Implementierung + Fixtures + `MockQueryEngine` | hängt von `xmla-api` ab |
| `@mdx-workbench/xmla-soap` | unverändert, Import auf `xmla-api` umgestellt | — |
| `@mdx-workbench/language` | unverändert + **`createMdxLanguageWorker()`-Export** bzw. stabiler Worker-Entry `dist/main-browser.js`, damit Hosts ohne Vite-Alias `new Worker(new URL(…))` nutzen können | `./protocol`-Export bleibt Langium-frei |
| `@mdx-workbench/core` **(neu)** | Alles Pure aus `workbench/src`: `fragment-builder`, `metadata-browse`, `derive-semantics`, `vega-mapper`, `pivotToMdx`/`PivotConfig`, `examples`, `lsp/client` + `worker-transport`, plus neu: `createWorkbenchCore(opts)` — Zustands-/Verdrahtungsfabrik (LSP-Client, XMLA-Wrapper mit LCID, ComponentRegistry, Dokument-/Metadaten-State, Events) als Ersatz für die Closure in `main.ts` | kein DOM, kein `window`/`location`; URI-Schema und localStorage-Prefix per Option injizierbar |
| `@mdx-workbench/panes` **(neu)** | Die DOM-Pane-Factories: `metadata-tree`, `ast-view`, `cst-view`, `builder-view`, `pivot-view`, `metadata-picker`, `inline-assist`, `with-editor`, `function-browser`, `results-pane`, `rowset-grid`, `inspector`, `drop-chooser`, `connection-dialog`, `editor/mdx-editor` | siehe Härtungs-Checkliste unten |
| `@mdx-workbench/workbench` | schrumpft zur Demo-Shell: `index.html` + dünnes `main.ts`, das `core` + `panes` zusammensteckt | bleibt `private` |

### Härtungs-Checkliste für `@mdx-workbench/panes` (Embedding-Blocker beseitigen)

1. **`dispose()` für jede Factory** (Event-Listener abbauen, `EditorView.destroy()`, Worker-Terminate über `core`).
2. **Kein `document.body` mehr**: Modals/Popups (`openRowInfo`, `openMemberLoader`, Function-Info, Inline-Assist, Cell-Menu) bekommen einen injizierbaren `portalHost: HTMLElement`; Dedupe nicht mehr über globale Klassen-Selektoren.
3. **Modul-Globals → Kontextobjekt**: `dnd/drag-state` und `tree-depth` wandern in einen `WorkbenchContext`, den `createWorkbenchCore()` erzeugt (macht Mehrfach-Instanzen auf einer Seite möglich — wichtig, weil im Board mehrere Datasource-Editoren nacheinander geöffnet werden).
4. **CSS entkoppeln**: alle Klassen präfixen (`mdxwb-…`), `*`-/`body`-/`#id`-Regeln raus aus dem Bibliotheks-CSS, Farbwerte ausschließlich über CSS-Variablen (`--mdxwb-bg`, `--mdxwb-accent`, …) mit **Light- und Dark-Werten**; `.hidden` u. ä. Utility-Klassen ersetzen.
5. **Globale Key-/Click-Listener** (`Escape`, Cell-Menu-Dismiss) auf den Pane-Root bzw. `portalHost` scopen.
6. **Share-Link/`history.replaceState` optional machen** (Callback statt direktem `location`-Zugriff) — im Board übernimmt das der Host oder entfällt.
7. `innerHTML`-Interpolationen auditieren (Writeback-Dialog, Metadata-Tree) — Servermetadaten sind nicht vertrauenswürdig.

## 4. Modulschnitt Daanse Board App (neue/geänderte Pakete)

| Paket | Zweck | Service-Vertrag (tsm-ready) |
|---|---|---|
| `org.eclipse.daanse.board.app.lib.mdx.language` **(neu)** | Bootstrapt den Langium-Worker (`@mdx-workbench/language`), bindet `MdxLanguageClient` in den Container | provides `mdx.language.client` (Symbol `Symbol.for('MdxLanguageClient')`); Singleton, ein Worker für alle Editoren |
| `org.eclipse.daanse.board.app.lib.xmla.workbench.adapter` **(neu)** | Adapter: implementiert `XmlaDiscoverClient`/`XmlaExecuteClient` aus `@mdx-workbench/xmla-api` **über die bestehende `XMLAApi`** aus `…lib.connection.xmla` (Session, Auth, Katalog, CORS-Handling bleiben in Daanse) | provides `xmla.workbench.clientfactory` — Factory `(connectionId) → {discover, execute}`; requires `ConnectionRepository` |
| `org.eclipse.daanse.board.app.ui.vue.common.workbench` **(neu)** | Dünne Vue-Wrapper um die Pane-Factories: `<WbMdxEditor>`, `<WbMetadataTree>`, `<WbBuilder>`, `<WbPivotDesigner>`, `<WbResults>`, `<WbAstView>`, `<WbInspector>`, `<WbSplitPane>` (`onMounted` → create, `onBeforeUnmount` → dispose; Props/Emits ↔ Callbacks) | konsumiert `mdx.language.client` + Client-Factory; kein eigener State |
| `org.eclipse.daanse.board.app.ui.vue.datasource.xmla` **(geändert)** | `Preview.vue` wird durch den Workbench-basierten Editor ersetzt; **Vertrag bleibt**: Prop `dataSource`, `emit('updateConfig', {mdx, useMdx, requestParams, drilldownState})` | Registrierung unverändert über `Symbol.for('XmlaPreview')` |
| `org.eclipse.daanse.board.app.ui.vue.mdx.workbench` **(neu)** | Workbench-Seite `/datasources/workbench`: volle Workbench (CST/AST, Function Browser, Discover-Explorer, Query-Tabs) als Ansicht im Bereich Verbindungen & Daten — Route über `RouteDefinition`, **kein** eigener `NavigationItem` | requires `mdx.language.client`, `xmla.workbench.clientfactory` |
| `org.eclipse.daanse.board.app.app.default` **(geändert)** | Neue Shell (Topbar + Aktivitätsleiste + Panel-Layout), gemeinsame Design-Tokens, Side-Effect-Imports der neuen Pakete **vor** `import router` | — |

Abgrenzungen:
- `ui/vue/common/monaco` bleibt für SQL (`sql_xmla`-Preview) bestehen; die MDX-Monarch-Teile werden nach Abschluss von Phase 3 entfernt.
- `ui/vue/common/xmla` (MetadataTree, QueryDesigner, PivotTable) bleibt zunächst unangetastet — Widgets (PivotTable-Widget) nutzen es weiter. Der Workbench-`pivotToMdx`/`PivotConfig` ist nahezu deckungsgleich mit `queryConfig {filters, rows, columns, measures}`; eine spätere Konsolidierung (eine Tree-/Designer-Implementierung für beide) ist Phase 6-Kandidat.
- `@mdx-workbench/*`-Pakete werden als npm-Dependencies konsumiert (git-Subtree/Registry), nicht ins Board-Monorepo kopiert.

### tsm-Ausrichtung (vorbereitet, nicht sofort aktiviert)

Jedes neue Paket bekommt:
- `init(container)` (heutiger `SetupI`-Weg) **und** `activate(context)`/`deactivate(context)`-Exporte, die dieselbe Registrierung über `context.services` ausführen — `deactivate` räumt eigene Services selbst ab (tsm-Loader räumt nicht auf).
- Ein `manifest.json` (id = npm-Name, `entry: dist/<name>.js`, `provides`/`requiresService` wie oben, `sharedDependencies`: `vue ^3.4`, `inversify ^7`), `exports` leer lassen.
- Versionierte Service-IDs, wo Verträge brechen können (z. B. `mdx.language.client.v1`).
- Keine Zyklen; Provider-Pakete (`lib.mdx.language`, Adapter) mit höherer `priority` als UI-Pakete.

## 5. Schlüssel-Verträge

1. **Preview-Slot** (unverändert): `dataSource: {uid, name, type, config}` → `updateConfig({...config, mdx | useMdx | requestParams | drilldownState})`. Der Workbench-Editor schreibt bei „Code“-Nutzung `mdx` + `useMdx:true`, bei Designer-Nutzung `requestParams` (aus `PivotConfig` gemappt).
2. **XMLA**: `XmlaDiscoverClient.discover(rowset, restrictions?, properties?)` / `XmlaExecuteClient.execute(statement, properties?)` — Adapter über `XMLAApi`; `LocaleIdentifier` wird zentral vom Core-Wrapper injiziert.
3. **LSP**: `mdx/setMetadata` erhält den MDSCHEMA-Snapshot (aus Adapter-Discover, nicht aus `MetadataStorage` — die Workbench erwartet rohe Rowsets); `mdx/documentTree` versorgt AST/CST/Builder; `mdx/structuralEdit` liefert minimale Text-Patches (eine Undo-Einheit).
4. **Theming**: ein Token-Satz in `app/default/src/assets/main.css` (`@theme`) wird auf die `--mdxwb-*`-Variablen gemappt; Workbench-Panes erben damit automatisch Light/Dark der App.

## 6. Layout-Anpassung der Board App (Workbench-Look)

Prinzipien aus der Workbench übernehmen: 42-px-Topbar mit Kontext (Cube-/Seiten-Selektor rechts, Aktionen als kompakte Buttons), schmale Aktivitätsleiste statt Hover-Sidebar, CSS-Grid-Layout mit Splitter-verstellbaren Panes (`--left-w`, `--right-w`, `--bottom-h`, persistiert), dichte 13-px-Typografie, Panel-Header mit Tabs.

Betroffene Stellen:
- `app/default/src/App.vue`: Grid-Shell statt `va-sidebar`-Overlay; Aktivitätsleiste speist sich weiter aus `NAVIGATION_REGISTRY`.
- `app/default/src/components/common/Header.vue`: wird die echte Topbar (Logo, Seitentitel, globale Aktionen, Benutzer/Einstellungen).
- `app/default/src/assets/main.css`: Design-Tokens für Light + Dark (Basis: Workbench-Dark `#1e1f24`/Akzent + Daanse-Orange `#c29803` als Sekundärakzent), `.ice`-Glassmorphism wird zurückgefahren.
- `EditReport.vue`: rechter Inspector (Widget-Einstellungen) als andockbares Panel statt Modal-Fenster; Widget-Palette als linkes Panel — gleiche Splitter-Mechanik wie in der Workbench.
- Ein neues Paket ist dafür nicht nötig; die Splitter-/Panel-Primitiven kommen als `<WbSplitPane>`/`<WbPanel>` aus `ui.vue.common.workbench`.

## 7. UX-Leitbild: Navigation entlang des Workflows

**User Story:** *Als Nutzer möchte ich aus mir bekannten Datenquellen Dashboards anlegen — das Entdecken und Konfigurieren der Datenquellen ist Schritt 1, danach folgt die Board-Erstellung.*

### Probleme der heutigen Struktur

- Die Sidebar ist **werkzeug-orientiert** („View dashboard / Edit dashboard / Data configuration“), nicht workflow-orientiert; der erste Workflow-Schritt (Daten) ist der letzte Menüpunkt und hängt an der hartkodierten Route `/qweqwe/data`.
- **View und Edit sind getrennte Top-Level-Ziele**, obwohl sie Modi desselben Objekts (Board) sind.
- Es gibt **kein Objekt „Board“ in der Navigation** — keine Liste, kein geführter „Neu anlegen“-Einstieg; neue Nutzer landen auf einem leeren „View Report“.

### Neue Informationsarchitektur: drei Ebenen

**Ebene 1 — Boards (Home, `/` → `/boards`):** ein reiner Board-Launcher **ohne Seitenmenü** — das Menü links erscheint erst in den Arbeitsbereichen; die Konfiguration ist über „⚙ Konfiguration“ in der Topbar erreichbar. Boards gruppiert nach Quelle: **Lokal**, **Git-Repository** (mit Sync-Status je Board, „⇣ Aus Git holen“; Basis `lib/persistence/git`) und **Dateisystem** (Board-Datei per Drag & Drop oder Dateidialog, heutiges „Upload file“/`persistence/loader`). Die heutigen SaveLoad-/Configuration-Menüpunkte entfallen. **Ansicht/Bearbeiten wird Modus-Toggle in der Topbar** des geöffneten Boards — „Edit dashboard“ als Menüpunkt entfällt.

**Ebene 2 — Übersichtsseite (`/overview`):** der Konfigurations-Hub mit Kacheln (Zähler + Status) für **Verbindungen & Daten** (inkl. MDX Workbench), **Variablen**, **Events**, **Pages & Layouts**. Die Kacheln entsprechen exakt den Menüeinträgen unterhalb von „Übersicht“ — Hub für Überblick und Einstieg, Menü für den Direktsprung.

**Ebene 3 — Detailansichten** mit einem einheitlichen Muster:
- **Verbindungen & Daten** (`/datasources`): Master-Detail — links der Baum aus Verbindungen und ihren Datenquellen (Live-Status je Verbindung, **Verwendungsnachweis** je Datenquelle: „verwendet in 2 Boards · 5 Widgets“), rechts Preview oder Editor der gewählten Quelle; Vertiefung in den Vollbild-Editor (Workbench-Preview, Abschnitt 4) und die MDX Workbench. **Derselbe Verbindungen-&-Daten-Baum erscheint konsistent in allen drei Ansichten**: Master-Detail (voll), Daten-Editor (kompakt), MDX Workbench (minimiert, aufklappbar).
- **Variablen** (`/variables`) und **Events** (`/events`): Detail- und Anlageansichten wie im heutigen Daanse (Variablen-Typen, Event Manager).
- **Pages & Layouts** (`/pages`): Übersicht aller Seiten mit Board-Zuordnung, Layout-Typ und Widget-Zahl (aus `PageRegistry`/`LayoutRepository`); **darunter hängen Board-Bearbeiten und Board-Ansicht**: Seite wählen → Widgets bearbeiten → Ergebnis ansehen.

Die **MDX Workbench** ist — wie der Daten-Editor — **eine Ansicht innerhalb von Verbindungen & Daten** (Route `/datasources/workbench`, **kein eigener Menüeintrag, kein eigenes Icon**): erreichbar über „In Workbench erkunden“ aus der Master-Detail-Ansicht, aus dem Daten-Editor und per Deep-Link; Ausgang „Als Datenquelle speichern“.

Aktivitätsleiste: **Boards · Übersicht · Verbindungen & Daten · Variablen · Events · Pages & Layouts** · (unten) Einstellungen. Bewusst **keine** Menüeinträge sind: Ansicht/Bearbeiten (Modi im geöffneten Board, unterhalb von Pages & Layouts erreichbar), Daten-Editor und MDX Workbench (Ansichten innerhalb von Verbindungen & Daten).

**Beschleuniger (aus dem Tool-Benchmark):**
- **Auto-Start-Board** (Metabase-„X-ray“-Muster): Nach dem Anlegen einer XMLA-Datenquelle wird ein generiertes Erst-Board angeboten — Measures als KPI-Kacheln, erste Dimension als Pivot. Verkürzt „Konfigurieren → Bauen“ auf einen Klick.
- **Inline-Datenquellen-Anlage** (Superset-Muster): In den Widget-Einstellungen „＋ Neue Datenquelle“ als Rückfalloption für Nutzer, die doch beim Board beginnen.
- Vorbilder je Baustein: Explorations-Ansicht mit Vorwärts-Link (Grafana Explore, Superset SQL Lab, Kibana Discover), Edit als Modus-Toggle (Grafana, Metabase), Verwendungsnachweis (Power BI Lineage, Superset), Status auf Verbindungen (Tableau-Zertifizierung).

### Verbindende Elemente (wichtiger als die Menüreihenfolge)

- **Geführte Leerzustände statt Wizard-Zwang**: „Keine Verbindung → anlegen“, „Keine Datenquelle → aus Verbindung konfigurieren“, „Neues Board ohne Datenquelle → zuerst dorthin führen“; dazu eine ausblendbare Onboarding-Checkliste „Verbindung → Datenquelle → Board“ auf der Boards-Übersicht.
- **Vorwärts-Link**: aus dem Datenquellen-Preview „Als Widget in Board übernehmen“ (Vorschau-Ergebnis direkt als Pivot/Chart in ein Board).
- **Rückwärts-Link**: aus den Widget-Einstellungen zur zugrunde liegenden Datenquelle bzw. „In MDX Workbench öffnen“.
- **Routen-Refactoring**: `/` → Redirect auf `/boards`; dazu `/boards/:id`, `/boards/:id/edit`, `/overview`, `/datasources`, `/datasources/workbench`, `/variables`, `/events`, `/pages` — statt `/`, `/edit`, `/:id/data` und der separaten SaveLoad-/Configuration-Seiten.

Umsetzung: Einträge über die `NAVIGATION_REGISTRY`; neue Seiten in `app/default`: Boards-Home (mit Git-Import aus `lib/persistence/git`), Übersichts-Hub, Verbindungen & Daten als Master-Detail (ersetzt `DataSettings`), Pages & Layouts; Variablen/Events übernehmen die bestehenden Ansichten; Routen-Umbau zusammen mit dem Shell-Redesign (Phase 4).

## 8. Phasenplan

| Phase | Inhalt | Ergebnis / Definition of Done |
|---|---|---|
| **0 — Workbench-Refactoring** | `xmla-api` + `core` + `panes` herausschneiden, Härtungs-Checkliste (dispose, Portale, Kontext statt Globals, CSS-Präfix + Themes, Worker-Entry) | Workbench-Demo-Shell läuft unverändert auf den neuen Paketen; `npm pack` liefert publizierbare Artefakte |
| **1 — Brücke in Daanse** | `lib.mdx.language` (Worker + Client), `lib.xmla.workbench.adapter`, `ui.vue.common.workbench` (Editor + MetadataTree als erste Wrapper) | Im bestehenden `Preview.vue` ersetzt `<WbMdxEditor>` den Monaco-Tab „Code Editor“ (Diagnostics, Completion, Semantic Highlighting gegen echte Verbindung) |
| **2 — Preview-Ersatz** | Neues `Preview.vue`: Workbench-MetadataTree (Drag & Drop mit Struktur-Edits), Tabs Designer/Code/Builder, Results-Pane mit Pivot + Drilldown + Writeback; `PivotConfig`↔`requestParams`-Mapping | Alter Preview vollständig abgelöst, `updateConfig`-Vertrag erfüllt, bestehende Boards funktionieren unverändert |
| **3 — Workbench-Ansicht** | `ui.vue.mdx.workbench`: Route `/datasources/workbench` (Ansicht im Bereich Verbindungen & Daten, kein eigener Menüeintrag), Query-Tabs, CST/AST, Function Browser, Discover-Explorer; Connection-Auswahl aus `ConnectionsPinia` | Voller Workbench-Umfang in der App; MDX-Monarch-Code aus `common/monaco` entfernt |
| **4 — Shell-Redesign & IA** | Neue App-Shell (Topbar mit Modus-Toggle, Aktivitätsleiste, Panels), Boards-Home mit Git-Import, Übersichts-Hub, Verbindungen & Daten als Master-Detail, Pages & Layouts, geführte Leerzustände + Onboarding-Checkliste, Routen-Refactoring (`/` → `/boards`, `/overview`, `/datasources`, `/pages`, `/mdx`), Design-Tokens Light/Dark, Editor-Inspector andockbar | Alle Seiten im neuen Layout gemäß Abschnitt 7 und Mockups |
| **5 — tsm-Manifeste** *(optional)* | `manifest.json` + `activate`/`deactivate` je Paket, Host: `initTsmRuntime()` + Shared Libs (`vue`, `inversify`), Repository-Endpoint | Neue Pakete dynamisch ladbar; statischer Boot bleibt Fallback |
| **6 — Konsolidierung** *(optional)* | Eine Tree-/Designer-Implementierung für Widgets **und** Workbench (`common/xmla` auf `panes`-Basis) | Doppelte MetadataTree/QueryDesigner-Implementierungen entfernt |

Abhängigkeiten: 0 → 1 → 2 → 3; 4 ist ab Phase 1 parallelisierbar; 5/6 unabhängig nach 3.

## 9. Risiken & Gegenmaßnahmen

| Risiko | Maßnahme |
|---|---|
| **Worker-Bundling** (`?worker`-Import ist Vite-spezifisch; App externalisiert alles Nicht-Relative) | Stabiler `dist/main-browser.js`-Entry + `createMdxLanguageWorker()`; im App-Vite ggf. `optimizeDeps.exclude` + Alias; früh in Phase 1 verifizieren |
| **CSS-Kollisionen** (globale Workbench-Styles vs. Tailwind/Vuestic) | Phase-0-Präfixierung ist Pflicht vor jeder Einbettung |
| **Dark-only-Theme** | Token-Mapping in Phase 0/4; Light-Werte definieren, bevor die Shell umgestellt wird |
| **Metadaten-Format** (Workbench erwartet rohe MDSCHEMA-Rowsets, Daanse hat `MetadataStorage`) | Adapter liefert rohe Rowsets direkt aus `XMLAApi`; `MetadataStorage` bleibt für Widgets |
| **CORS** gegen reale XMLA-Server | läuft über die bestehende Daanse-Connection (Proxy/Autch dort gelöst); `xmla-soap` wird im Board nicht direkt benutzt |
| **vega-embed-Größe** (~1 MB) hängt an `results-pane` | Chart-Modus als dynamischer Import / eigenes Subpaket `@mdx-workbench/panes-chart` |
| **Lizenz**: tsm ist MIT, Board App EPL-2.0, Workbench-Header referenzieren EPL | vor Publikation klären (EPL-2.0 für neue Pakete, MIT-Dependency ist kompatibel) |
| **Mehrfach-Instanzen** (Editor-Dialog mehrfach öffnen) | Kontextobjekt statt Modul-Globals (Phase 0, Punkt 3) |
| **Performance** großer Kataloge im Tree | Workbench lädt lazy per Discover + Paging (Member-Loader) — Verhalten beibehalten, nicht auf `MetadataStorage`-Volllast umstellen |

## 10. Mockups

Ein **klickbarer Prototyp** liegt unter [`docs/mdx-workbench-layout-mockups.html`](./mdx-workbench-layout-mockups.html) (im Browser öffnen):

- **Flow-Karte** als Einstieg: die drei Ebenen (Boards-Home → Übersichts-Hub → Detailansichten) mit Screens und Querverbindungen.
- **Acht Screens**: Boards-Home (Launcher ohne Seitenmenü; Quellen Lokal/Git/Dateisystem mit Sync-Status), Übersichts-Hub, Verbindungen & Daten (Master-Detail: Baum links, Preview/Editor rechts), Daten-Editor (Workbench ersetzt den MDX Preview), MDX Workbench (Ansicht innerhalb von Verbindungen & Daten, kein eigener Menüeintrag), Pages & Layouts, Board-Editor, Dashboard-Ansicht.
- Die **Journey-Leiste** ordnet jeden Screen einem Workflow-Schritt zu; Aktionen in den Mockups (z. B. „＋ Neues Board“, „Als Widget in Board“, „In MDX Workbench öffnen“, Aktivitätsleiste) sind klickbar und spielen die Übergänge nach.
- Umschalter: **Dark/Light** (Token-Mapping aus Abschnitt 5/6) und **Bestand/Erstnutzung** (geführte Leerzustände aus Abschnitt 7).
