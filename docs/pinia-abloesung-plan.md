# Plan: Pinia verlässt Widgets, Seiten, Verbindungen und Datenquellen

Stand: 2026-09-11 · Branch `feat/workbench-layout-design`

**Reihenfolge geändert (2026-09-11):** Phase 3 wandert ans Ende. Sie
verspricht, dass `useWorkspaceSnapshot` samt `flatted` und dem
Schlüssel `conections` verschwindet — das geht erst, wenn alles im Modell
ist. Vorgezogen würde sie ein Zwischenformat erzeugen, das nach Phase 5
noch einmal angefasst werden müsste. Neue Folge: **0 → 1 → 2 → 4 → 5 → 3**.

Voraussetzung, bereits erledigt: die Datenquellen-Konfigurationen kommen aus
ihren Modellen (`a98c0e60`), `@emfts/core` ist geteilte Abhängigkeit aller
zehn Datenquellen-Pakete, alle EPackages registrieren in **eine** Registry.

## 1. Ziel

Der Zustand des Workspace — welche Verbindungen, Datenquellen, Seiten,
Widgets und Layouts es gibt und wie sie konfiguriert sind — liegt in einem
EMF-Modell unter einer Wurzel, nicht in Pinia-Stores. Reaktivität kommt aus
`@emfts/core`s Benachrichtigungen, Persistenz aus `JSONResource`.

Danach sind die vier Pakete `ui/vue/stores/{connection,datasouce,widgets,layout}`
gelöscht und ihre vier tsm-Bundles zurückgezogen.

Was das **nicht** ist: ein Abschied von Vue. Die Oberfläche bleibt wie sie ist,
sie bekommt ihre Daten nur aus einer anderen Quelle.

## 2. Ausgangslage

### 2.1 Fünf Entitäten, fünf Bauweisen

| | Wo es lebt | Zweite Kopie | Benachrichtigung |
|---|---|---|---|
| Verbindungen | Pinia-Array **und** `ConnectionRepository` | ja | Vue-Reaktivität |
| Datenquellen | Pinia-Array **und** `DatasourceRepository` | ja | Vue-Reaktivität |
| Seiten | nur `PageRegistryImpl` | nein | `SubscribeNotifyImpl` |
| Widgets | nur Pinia, ein Store pro Seiten-ID | nein | Vue-Reaktivität |
| Layout | nur Pinia, ein Store pro Seiten-ID | nein | Vue-Reaktivität |

Das ist kein Muster, das sind fünf Einzelentscheidungen — und drei
Benachrichtigungsmechanismen nebeneinander, sobald man EMF mitzählt.

### 2.2 Dieselbe Tatsache steht viermal im Code

„Diese Verbindung existiert, mit dieser Konfiguration" wird von Hand
geschrieben in `createConnection`, `updateConnection`, `updateConnections`
(alle `ConnectionsPinia.ts`) und noch einmal in
`useWorkspaceSnapshot.restore()`:

```ts
if (data.conections) connections.connections = data.conections     // Kopie 1
for (const connection of data.conections ?? [])
  connectionRepository?.registerConnection(...)                    // Kopie 2
```

Für Datenquellen dasselbe. Dabei ruft `updateConnections` und
`updateDataSources` **niemand** — die Store-Methoden, die genau dafür da
wären, sind tot, `restore()` schreibt an ihnen vorbei.

### 2.3 Was daraus schon kaputt ist

- **Die vorbelegte Verbindung wird nie registriert.** Sie steht im
  Store-Setup, aber `registerConnection` ruft nur `create`/`update`. Jede
  Datenquelle läuft beim Start ins Leere — `Error: Connection with id test
  not found` —, bis jemand die Verbindung einmal von Hand speichert. Das ist
  die eine Stelle, an der nur eine der vier Kopien geschrieben wurde.
- **Jedes Speichern zerstört das lebende Objekt.** `updateDataSource` macht
  `removeDatasource()` + `registerDatasource()`, also `destroy()` mitsamt
  Subscriptions, Polling-Timern und Caches, und baut neu.
- **Die DTO-Felder werden in den Konfigurations-Sack kopiert**
  (`config['name'] = name` usw.), dreimal pro Store, weil `init()` sie dort
  erwartet. Dieselbe Duplikation, die eine Ebene tiefer gerade entfernt wurde.
- **`useWidgetsStore(pageId)` ruft `defineStore` bei jedem Aufruf**, legt pro
  Seite einen Store an und gibt keinen je frei.
- **Die Richtung ist verdreht.** Laden geht Store → Repository, Speichern geht
  Store → JSON. Das Repository ist nie die Instanz, obwohl es in 45 Dateien
  benutzt wird und der Store nur in 10.

### 2.4 Was `@emfts/core` schon mitbringt

Geprüft in `node_modules/@emfts/core/dist/`:

- `notify/Notifier.d.ts` — `eAdapters()`, `eNotify()`, `eSetDeliver()`;
  `BasicEObject implements InternalEObject, Notifier`. **Jedes generierte
  Impl ist bereits ein Notifier**, unsere Setter rufen `eNotify`.
- `notify/EContentAdapter.d.ts` — hängt sich an einen ganzen
  Containment-Baum, folgt Hinzufügen und Entfernen. Ein Adapter an der
  Wurzel deckt alles darunter ab, auch später Hinzugefügtes.
- `EList.d.ts` — `dispatchNotification` für ADD/REMOVE/MOVE.
- `json/` — `JSONResource`, `JSONSave`, `JSONLoad`; `Resource` hat
  `save()`, `load()`, `getEObject(uriFragment)`, `isModified()`.

Es fehlt genau ein Stück: die Brücke von einer Benachrichtigung zu Vues
Neuzeichnen.

## 3. Zielbild

Eine modellierte Wurzel hält alles per Containment:

```
Workspace
 ├─ connections : Connection [0..*]        (containment)
 ├─ datasources : Datasource [0..*]        (containment)
 └─ pages       : Page [0..*]              (containment)
     ├─ widgets : Widget [0..*]            (containment)
     └─ layout  : LayoutItem [0..*]        (containment)
```

Daraus folgt dreierlei:

1. **Ein `EContentAdapter` an `Workspace`** meldet jede Änderung irgendwo im
   Baum. Das ist die Reaktivität, für die es heute vier Pinia-Stores gibt.
2. **`JSONResource` ist die Persistenz.** `resource.save()`/`load()` ersetzt
   `useWorkspaceSnapshot` samt `flatted`, samt der Reihenfolgenfalle bei
   abgeleiteten Quellen (`chart`, `datatable`) — und samt dem Schreibfehler
   `conections` im gespeicherten Schlüssel.
3. **Aus IDs werden EReferences.** `widget.config.datasourceId` und
   `source.config.connection` sind heute Zeichenketten, die niemand prüft.
   Als Referenz beantwortet `eCrossReferences()` direkt, was
   `useDatasourceUsage` heute durch einen Lauf über alle Seiten rekonstruiert
   — und eine Datenquelle ohne Verbindung ist eine unaufgelöste Referenz
   statt einer stillen Fehlzuordnung.

Die lebenden Objekte (`BaseDatasource`, `IConnection`) bleiben, wo sie sind:
in ihren Repositories. Neu ist nur, dass sie aus einem Modellobjekt gebaut
werden und dass ihre Konfiguration sich ändern lässt, ohne sie wegzuwerfen.

## 4. Das eine neue Stück: die Vue-Brücke

Neues Paket `ui/vue/emf` (oder in `ui/vue/composables`), ungefähr dreißig
Zeilen, einmal geschrieben und überall benutzt:

```ts
/** A modelled object as something Vue re-renders on. */
function useEObject<T extends EObject>(object: T): ShallowRef<T>

/** A containment list as a plain array Vue re-renders on. */
function useEList<T>(owner: EObject, feature: EStructuralFeature): ShallowRef<T[]>

/** One feature, readable and writable - for v-model. */
function useFeature<V>(object: EObject, feature: EStructuralFeature): WritableComputedRef<V>
```

Mechanik: ein `AdapterImpl` am Objekt (bzw. ein `EContentAdapter` an der
Wurzel), `notifyChanged` setzt einen `shallowRef` neu oder ruft `triggerRef`.
Abmelden in `onScopeDispose`.

**Die Falle, die dabei zu vermeiden ist** — hier schon einmal getreten, beim
Timeline-Widget: ein EObject darf nicht in `reactive()` oder tiefes `ref()`.
Der tiefe Proxy macht `this` in den Methoden zum Proxy, Identitätsvergleiche
wie `eContainer() === x` brechen, `eAllContents` und `eAdapters` zerfallen.
Regel: `shallowRef` und `markRaw`, geschrieben wird **immer** durch den
Setter, nie an der Instanz vorbei. Dasselbe Muster, das `VariableWrapper`
hier schon vorgibt: binden *durch*, nicht *an*.

## 5. Modellschnitt

Neues Paket `lib/model/workspace` mit `model/workspace.ecore`, genconfig im
`emf`-Modus, Ausgabe nach `src/gen` wie überall. Ein EPackage, weil die
Klassen einander per Containment und Referenz brauchen.

| EClass | Ersetzt | Anmerkung |
|---|---|---|
| `Workspace` | — | Wurzel, Containment für alles |
| `Connection` | `ConnectionDTO` | `config` als Referenz auf `IBaseConnectionConfiguration` |
| `Datasource` | `DataSourceDTO` | `connection` als **EReference**, nicht String |
| `Page` | `PageI` (handgeschrieben) | Felder aus `lib/api/page/src/index.ts` |
| `Widget` | `IWidget` | `datasource` als EReference; `settings` und `wrapperConfig` als Containment auf die bestehenden Settings-Modelle |
| `LayoutItem` | `ILayoutItem` | `id`, `x`, `y`, `z`, `width`, `height` |

Günstig: die Settings-Modelle der Widgets und der `WrapperSettings` des
Wrappers existieren bereits im `emf`-Modus. `Widget.settings` kann direkt
darauf zeigen; die Konfigurations-EObjects der Datenquellen ebenso.

## 6. Phasen

Jede Phase ist für sich lauffähig und einzeln zurücknehmbar.

### Phase 0 — Das Registrierungsloch zumachen ✔ erledigt (`97b5e6bc`)

Unabhängig vom Rest, behebt einen Defekt, der heute jeden Board-Start trifft.

- Eine Stelle, die beim Start registriert, was in den Stores steht
  (`updateConnections`/`updateDataSources` benutzen — die gibt es, sie sind
  nur tot — oder die Vorbelegung entfernen und explizit anlegen).
- **Fertig, wenn** eine frisch geladene Seite Daten zeigt, ohne dass man die
  Verbindung von Hand speichert.

### Phase 1 — Brücke und Wurzel, bewiesen an den Verbindungen ✔ erledigt (`36338ff1`)

- `lib/model/workspace` anlegen, zunächst nur `Workspace` und `Connection`.
- `ui/vue/emf` mit `useEObject`/`useEList`/`useFeature`.
- `ConnectionRepository` hält die `Connection`-EObjects; `registerConnection`
  nimmt das Modellobjekt und baut das lebende `IConnection` daraus.
- Die sieben Aufrufstellen von `useConnectionsStore` gehen auf das Repository
  plus Brücke.
- `ui/vue/stores/connection` wird gelöscht, Bundle aus `bundles.ts` entfernt.
- **Fertig, wenn** Anlegen, Umbenennen, Typwechsel und Löschen im Baum
  „Verbindungen & Daten" ohne Pinia funktionieren und die Liste sich ohne
  manuelles Neuladen aktualisiert.

Das ist die Probe. Trägt der Schnitt hier nicht, kostet die Rücknahme wenig.

### Phase 2 — Datenquellen ✔ erledigt (`e5b69040`)

- `Datasource` ins Modell, `connection` als EReference.
- `updateDataSource` schreibt in das EObject statt zu zerstören und neu zu
  bauen; das lebende Objekt hört über einen Adapter zu und passt sich an
  (`init` erneut, oder gezielt — je Store zu entscheiden).
- `useDatasourceUsage` kann bleiben, bis Phase 5 die Widgets modelliert hat.
- Die sieben Aufrufstellen von `useDataSourcesStore` umstellen,
  `ui/vue/stores/datasouce` löschen.
- **Fertig, wenn** ein Speichern in den Einstellungen keine Subscription mehr
  abreißt — prüfbar an einer Datenquelle mit Long Polling.

### Phase 3 — Persistenz auf `JSONResource` ✔ erledigt (zuletzt, siehe oben)

- `Workspace` in eine `JSONResource` legen, `save()`/`load()` statt
  `capture()`/`restore()`.
- `useWorkspaceSnapshot` entfällt; `flatted` fliegt aus den Abhängigkeiten.
- **Migration alter Stände:** ein Leser, der das heutige `flatted`-Format
  erkennt (Array an der Wurzel) und in das Modell überführt — inklusive des
  Schlüssels `conections`. Der bleibt als Altlast lesbar, wird aber nicht
  mehr geschrieben.
- **Fertig, wenn** ein vor dem Umbau gespeicherter Stand lädt und danach im
  neuen Format zurückgeschrieben wird.

### Phase 4 — Seiten ✔ erledigt (`d85eb718`)

- `Page` ins Modell; `PageRegistryImpl` gibt `SubscribeNotifyImpl` auf und
  benachrichtigt über EMF. Damit fällt der zweite von drei
  Benachrichtigungsmechanismen weg.
- `PageI` bleibt als Typ-Alias auf die generierte Schnittstelle bestehen,
  damit die 27 Dateien, die `lib.api.page` benutzen, nicht alle angefasst
  werden müssen.
- **Fertig, wenn** Anlegen und Umbenennen einer Seite die Navigation ohne
  `SubscribeNotifyImpl` aktualisiert.

### Phase 5 — Widgets und Layout ✔ erledigt (`3a5f67f7`)

Die unordentlichste Ecke und deshalb zuletzt: 13 Dateien benutzen
`useWidgetsStore`, 10 `useLayoutStore`, und beide legen pro Seite einen Store
an, den niemand freigibt.

- `Widget` und `LayoutItem` als Containment unter `Page`. Damit ist
  `useWidgetsStore(pageId)` schlicht `page.widgets` — die Store-pro-Seite
  entfällt ersatzlos, samt Leck.
- `Widget.datasource` als EReference; `useDatasourceUsage` wird zu einer
  Abfrage über `eCrossReferences()`.
- Betroffen sind auch Bundles, nicht nur die Shell: `ui/vue/layouts/base`,
  `ui/vue/layouts/grid`, `ui/vue/widget/page`,
  `ui/vue/plugins/endpointfinder`. Deren tsm-Manifeste tauschen die
  Abhängigkeit `ui.vue.stores.*` gegen das Modell-Paket.
- **Fertig, wenn** `ui/vue/stores/widgets` und `ui/vue/stores/layout` gelöscht
  sind und ein Board mit mehreren Seiten sich im Editor wie vorher verhält.

## 7. Migrationsfläche

Aufrufstellen ohne die Store-Pakete selbst und ohne `vite.config.ts`:

| Store | Dateien | davon in Bundles (nicht Shell) |
|---|---|---|
| `stores.connection` | 7 | `plugins/endpointfinder` (2) |
| `stores.datasouce` | 7 | `plugins/endpointfinder` (2) |
| `stores.widgets` | 13 | `layouts/base` (4), `layouts/grid` (2), `widget/page` (1), `plugins/endpointfinder` (1) |
| `stores.layout` | 10 | `layouts/base` (2), `layouts/grid` (2), `widget/page` (1), `plugins/endpointfinder` (1) |

`app/default/src/bundles.ts` listet die vier Store-Bundles als `b57`, `b58`,
`b126`, `b127`; sie verschwinden mit ihren Phasen.

## 8. Was bewusst offen bleibt

- **`xmla` und `ogcsta` behalten ihre handgeschriebenen
  Konfigurationsschnittstellen.** Deren verschachtelte Teile
  (`requestParams`, `history`) brauchen einen Umbau der Stores von innen; das
  ist eine eigene Aufgabe und keine Voraussetzung für diesen Plan.
- **Die Composer** (`chart`, `datatable`, `kpi`, `ogc`, `ogcsta2chart`,
  `weather`) haben gar kein Modell. Sie hängen über
  `ConfigurationOf<IBaseConnectionConfiguration>` mit und können später
  nachziehen.
- **Vuestic in den Datenquellen-Einstellungen** (56 Tags in elf Dateien)
  bleibt unberührt. Sobald die Konfigurationen EObjects sind, sind diese
  Masken modellierbar wie die Widget-Einstellungen — das ist der eigentliche
  Ertrag, aber ein Schritt danach.
- **Der Variablen-Mechanismus** (`VariableWrapper`, `ComputedStoreParameter`)
  bleibt wie er ist. Er ist bereits ein Binden *durch* statt *an* und passt
  zum Zielbild.
