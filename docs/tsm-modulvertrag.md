# Modulvertrag und Paketinventar (B1)

Stand: 2026-08-11 · Branch: `feat/architecture-emfts-tsm`
Grundlage: [`emfts-tsm-umsetzungsplan.md`](./emfts-tsm-umsetzungsplan.md), Strang B

Dieses Dokument legt fest, wie ein Paket sich künftig aktiviert, und inventarisiert,
was dafür an 113 Paketen zu ändern ist.

---

## 1. Der Vertrag

Ein Paket registriert seine Dienste nicht mehr beim Import, sondern in einer
exportierten Funktion:

```typescript
export function activate(ctx: ActivationContext): void | Promise<void>
export function deactivate(ctx: ActivationContext): void | Promise<void>
```

```typescript
export interface ActivationContext {
  /** Dienste registrieren und auflösen */
  readonly services: ServiceRegistry
  /** Logger, auf das Modul vorbeschriftet */
  readonly log: ModuleLogger
}
```

`ServiceRegistry` ist bewusst **das Interface aus `tsm/src/types.ts`**, nicht ein
eigenes. In Phase 1 wird es von einem Adapter über den bestehenden
Inversify-Container bedient (B2); in Phase 2 stellt tsm es selbst. Für die Pakete
ändert sich beim Übergang nichts — das ist der Zweck dieses Zuschnitts.

### Regeln

1. **Kein Modul-Toplevel-Code mit Wirkung.** Weder `container.bind` noch
   `container.get` außerhalb von `activate`. Der Import eines Pakets darf nichts
   tun außer Deklarationen bereitzustellen.
2. **Kein Import des globalen Containers.** Zugriff ausschließlich über
   `ctx.services`. (Warum das mehr als Kosmetik ist: siehe Abschnitt 5.)
3. **`deactivate` nimmt zurück, was `activate` angelegt hat** — oder das Paket
   deklariert sich ehrlich als nicht deaktivierbar (Abschnitt 4).
4. **Service-IDs als benannte Exporte**, nicht inline `Symbol.for('…')` an der
   Verwendungsstelle.
5. **`activate` darf asynchron sein.** Der Bootstrapper wartet auf jedes Modul,
   bevor er das nächste startet — die heutige Race Condition zwischen
   `loadPackages()` und dem synchron folgenden Code entfällt damit.

### Verhältnis zu den vorhandenen Verträgen

`packages/lib/core/src/api/` enthält bereits zwei ungenutzte Interfaces:

```typescript
export interface SetupI  { init(container: Container): void }
export interface ServiceI{ activate(): void; deactivate(): void }
```

`ServiceI` trägt die richtige Semantik, aber ohne Kontext; `SetupI` reicht den
rohen Container durch, was Regel 2 widerspricht. Beide werden durch den obigen
Vertrag ersetzt. Genutzt werden sie praktisch nicht: **genau ein Paket**
exportiert heute ein `init`.

---

## 2. Inventar — 113 Pakete

Erhoben über alle `packages/**/src/index.ts` mit Container-Zugriff. Die Einteilung
richtet sich danach, **wo** der Zugriff steht, weil daraus der Aufwand folgt.

| Klasse | Pakete | Bedeutung | Aufwand |
|---|---:|---|---|
| **A — nur `bind`** | 17 | Reine Bindungen, meist mit `isBound`-Wächter. Idempotent, keine Auflösung zur Importzeit. | trivial |
| **B — `get` in einer Funktion** | 62 | Der Registrierungscode steht bereits in einer Funktion, die am Dateiende selbst aufgerufen wird. **Faktisch schon ein `activate`** — nur ohne Kontext und selbst gestartet. | klein |
| **C — `get` auf Modulebene** | 34 | Dienste werden beim Import aufgelöst. Diese Pakete erzwingen die Ladereihenfolge und sind die Ursache der Race Condition in `main.ts`. | mittel |

Dass **62 von 113 bereits gekapselt** sind, ist der wichtigste Befund: die
Migration ist für die Mehrheit eine Umbenennung, kein Umbau.

### Nach Familien

| Familie | n | C (Modulebene) | B (Funktion) | A (nur bind) | Registrierungsmuster |
|---|---:|---:|---:|---:|---|
| `ui/vue/widget` | 24 | 0 | 24 | 0 | `registerWidget` + `EventRegistry.registerWidget` |
| `lib/datasource` | 11 | 0 | 11 | 0 | Store-Klasse + Factory-Symbol binden |
| `ui/vue/datasource` | 11 | **10** | 1 | 0 | Preview/Settings binden + `registerDatasourceType` |
| `ui/vue/lang` | 11 | **11** | 0 | 0 | `i18n.addResourceBundle` |
| `lib/repository` | 9 | 0 | 0 | 9 | Repository-Singleton binden |
| `lib/composer` | 6 | 0 | 6 | 0 | Composer binden |
| `lib/connection` | 6 | 0 | 6 | 0 | Connection-Klasse + Factory binden |
| `ui/vue/composer` | 6 | **6** | 0 | 0 | `registerDatasourceType` |
| `ui/vue/connection` | 6 | **6** | 0 | 0 | `registerConnectionType` |
| `lib/persistence` | 5 | 1 | 3 | 1 | Repository-Typen registrieren |
| `ui/vue/variable` | 3 | 0 | 3 | 0 | `registerVariableType` |
| `ui/vue/layouts` | 2 | 0 | 2 | 0 | `registerLayout` |
| `ui/vue/plugins` | 2 | 0 | 2 | 0 | diverse |
| übrige Einzelpakete | 11 | 0 | 4 | 7 | `lib/core`, `lib/events`, `lib/i18next`, `lib/logger`, `lib/settings`, `lib/pagecontext`, `lib/variables`, `lib/factory`, `lib/module1`, `ui/vue/eventmanager`, `ui/vue/page_provider`, `ui/vue/persistence` |

Die 34 Klasse-C-Fälle sind auf **vier Familien konzentriert** — `ui/vue/lang` (11),
`ui/vue/datasource` (10), `ui/vue/composer` (6), `ui/vue/connection` (6) — plus
einen Einzelfall in `lib/persistence`. Sie lassen sich als vier gleichförmige
Blöcke abarbeiten.

---

## 3. Migrationsrezepte

### Klasse B — der Regelfall (62 Pakete)

Heute, z. B. `ui/vue/widget/sample`:

```typescript
const register = () => {
  container.get<WidgetRepository>(identifier).registerWidget('SampleWidget', { … })
  container.get<EventRegistry>(EVENT_REGISTRY).registerWidget('SampleWidget', SampleWidgetEvents)
}
register()                                    // ← Selbstaufruf beim Import
```

Künftig:

```typescript
export function activate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY)
    .registerWidget('SampleWidget', { … })
  services.getRequired<EventRegistry>(EVENT_REGISTRY)
    .registerWidget('SampleWidget', SampleWidgetEvents)
}

export function deactivate({ services }: ActivationContext) {
  services.getRequired<WidgetRepository>(WIDGET_REPOSITORY)
    .unregisterWidget('SampleWidget')
}
```

Der Rumpf bleibt; es entfallen der Selbstaufruf und der Container-Import.

### Klasse C — Auflösung auf Modulebene (34 Pakete)

Heute, z. B. `ui/vue/datasource/csv`:

```typescript
const datasourceRepository = container.get<DatasourceRepository>(identifier)  // beim Import!
container.bind(previewSymbol).toConstantValue(Preview)
datasourceRepository.registerDatasourceType('csv', { … })
```

Der gesamte Block wandert unverändert in `activate`. Die Symbole bleiben
Modulkonstanten — sie sind Deklarationen, keine Wirkung.

### Klasse A — reine Bindungen (17 Pakete)

`container.bind(X).toSelf()` wird zu `services.bindClass(X_ID, X)`. Der
`isBound`-Wächter entfällt, weil `activate` genau einmal läuft — der Wächter war
nur nötig, weil Importe mehrfach ausgewertet werden konnten.

---

## 4. Deaktivierbarkeit — was heute nicht geht

Regel 3 lässt sich nicht überall erfüllen, weil den Registries die Gegenoperation
fehlt. Der Ist-Stand:

| Registry | Rücknahme | Anmerkung |
|---|---|---|
| `NavigationRegistry` | ✅ `unregisterNavigationItem` | vollständig |
| `RouteRegistry` | ✅ `unregisterRoute` | vollständig |
| i18next | ✅ `removeResourceBundle` | von i18next bereitgestellt |
| `DatasourceRepository` | ⚠️ nur `removeDatasource` | entfernt **Instanzen**, nicht den registrierten **Typ** |
| `ConnectionRepository` | ⚠️ nur `removeConnection` | ebenso |
| `WidgetRepository` | ❌ keine | kennt nur `registerWidget`, `getWidget`, `getAllWidgets` |

**Daraus folgt für B3:** Die Widget-Familie ist als Pilot richtig gewählt, aber
`WidgetRepository` braucht zuerst ein `unregisterWidget`. Ohne das wäre
`deactivate` eine Attrappe, und der Pilot würde die entscheidende Eigenschaft —
dass ein Modul sich wieder zurückziehen kann — gar nicht nachweisen.

Analog fehlen `unregisterDatasourceType` und `unregisterConnectionType` für B4.
Alle drei sind kleine Ergänzungen und gehören in den jeweiligen Migrationsschritt.

---

## 5. Warum Regel 2 keine Kosmetik ist

Bei A4 hat sich gezeigt, dass der „globale" Container nicht global ist:

```
esm.container === cjs.container  →  false
```

`lib.core` liefert je nach Modulformat **verschiedene Container-Instanzen**. In der
Anwendung fällt das nicht auf, weil dort alles ESM ist. Sobald aber ein Test, ein
Node-Skript oder ein SSR-Lauf ein gebautes Paket über CommonJS lädt, entsteht ein
zweiter Container — und jede Registrierung landet im falschen.

Das ist der Grund, warum ein Unit-Test der `VariableWrapperFactory` in A4 nicht
lauffähig war, und ein handfestes Argument für B2: Der Besitzer der Registry muss
explizit übergeben werden, statt als Modul-Singleton importiert zu werden.

---

## 6. Empfohlene Reihenfolge

1. **B2 — Adapter** (`lib/modules`): `ServiceRegistry` über Inversify, damit alte
   und neue Pakete gleichzeitig funktionieren.
2. **`unregisterWidget`** in `WidgetRepository` ergänzen.
3. **B3 — Pilot Widget-Familie** (24 Pakete, alle Klasse B): der homogenste und
   damit aussagekräftigste Block. Parallel entsteht der Bootstrapper in
   `app/default`, der die Modulliste sequenziell und `await`-korrekt aktiviert.
4. **B4 — die vier Klasse-C-Blöcke**: `ui/vue/lang`, `ui/vue/datasource`,
   `ui/vue/composer`, `ui/vue/connection`. Sie beseitigen die Ladereihenfolge als
   implizite Voraussetzung.
5. **B4 — Rest**: `lib/*`-Familien (überwiegend Klasse A und B) und Einzelpakete.

Nach Schritt 4 sollte `main.ts` ohne nebenwirkungsgetriebene Importe auskommen und
die Startreihenfolge explizit sein.

---

## 7. Nachtrag: Service-Locator in den Klassenrümpfen  ✔ aufgelöst

**Stand 2026-08-20: Das Muster ist aus dem Anwendungscode verschwunden** —
147 Stellen, vier Ersatzmuster je nach Konsumentenart:

| Konsument | Ersatz |
|---|---|
| Vue-Komponenten (50 Dateien) | Vues `provide`/`inject`, gespeist von einer Bridge im Launcher, die jeden Dienst unter seiner String-ID **und** unter `Symbol.for(id)` provided — also genau unter den `identifier`-Konstanten der Pakete. `container.get<T>(identifier)` → `inject<T>(identifier)` |
| Klassen aus eigenen Factories | Konstruktor-/Property-DI, Abhängigkeiten einmal bei der Aktivierung geschlossen; Repositories lösen ihre Typ-Einträge selbst auf (`resolveIdentifier`, Symbol-Description = Dienst-ID) |
| Statics und Helfer | Abhängigkeiten als Parameter vom Aufrufer, der sie legitim hält |
| Pinia-Stores | Closure-DI an der Modulgrenze: die Store-Pakete wurden Module, deren `activate` das Repository in die Store-Datei reicht (`inject` scheidet aus — Stores werden auch außerhalb von Component-Setup erstinstanziiert) |

`lib.variables` hat seine Import-Zeit-Bindungen verloren: jede Variablenklasse
entsteht über eine typbezogene Factory aus dem neuen `activate` des Pakets.
**Nachtrag, selber Tag: Der Container ist entfernt.** `BoardServiceRegistry`
(Spiegelung + Rückfallweg) gelöscht, `services` ist eine reine
`DefaultServiceRegistry`, `inversify` aus 105 `package.json`s ausgetragen.
Der Übergangsmechanismus starb, wie er entworfen war: durch Unbenutztheit.

Ursprünglicher Befund:


Beim Umstellen des Factory-Musters kam die Frage auf, warum die betroffenen
Klassen eigentlich nicht `@injectable` sind. Die Antwort erklärt zugleich eine
Grenze der bisherigen Arbeit.

### Befund

Die Decorator-Lage ist uneinheitlich und weitgehend wirkungslos:

| | `@injectable` | `@inject` | Konstruktor |
|---|---|---|---|
| `composer/chart`, `datatable`, `ogc`, `weather` | – | – | – |
| `composer/kpi` | ✓ | – | – |
| `connection/rest`, `rss`, `ws`, `xmla` | – | – | leer |
| `connection/mqtt` | ✓ | ✓ (Property) | ✓ |

`composer/kpi` trägt `@injectable()` ohne jede Injektion — der Decorator tut
dort nichts. Nur `mqtt` injiziert wirklich, und zwar einen Logger als Property.

**Der Grund:** Diese Klassen holen ihre Abhängigkeiten selbst aus dem globalen
Container, statt sie sich geben zu lassen:

```typescript
// lib/composer/chart/src/classes/index.ts
import { container } from 'org.eclipse.daanse.board.app.lib.core'
…
const datasourceRepository = container.get(…)   // mitten in einer Methode
```

Das ist ein **Service Locator**, keine Dependency Injection. Deshalb brauchen
die Klassen keine Konstruktor-Injektion — und deshalb war
`container.get(ChartComposer)` in der Factory nur ein Umweg um `new`.

### Was das für den Modulvertrag bedeutet

Regel 2 verlangt: kein Import des globalen Containers, Zugriff nur über
`ctx.services`. Erfüllt ist das bisher **für die `index.ts` der umgestellten
Pakete** — nicht für ihre Klassenrümpfe.

**82 Dateien** greifen außerhalb einer `index.ts` direkt auf den Container zu:
Composer- und Variablenklassen, Vue-Composables, einzelne Komponenten. Die
bisherige Umstellung betraf durchgehend die *Registrierungsseite*; die
*Konsumentenseite* ist unberührt.

Das ist keine Regression — der Zustand bestand vorher genauso. Aber es begrenzt,
was „umgestellt" bedeutet: Ein Paket erfüllt den Vertrag an seiner Oberfläche,
während sein Inneres weiterhin am globalen Container hängt.

### Konsequenz

Der Rückfallweg samt Spiegelung kann **erst dann entfallen**, wenn auch diese
82 Dateien umgestellt sind — nicht schon, wenn alle `index.ts` umgestellt sind.
Das war in Abschnitt 5 zu optimistisch formuliert.

Zwei Wege stehen offen, sie schließen sich nicht aus:

1. **Echte Konstruktor-Injektion** für die Klassen, die heute den Locator
   nutzen. Sauber, aber es fasst die Klassen selbst an und ändert ihre
   Erzeugung — die Fabriken müssten die Abhängigkeiten durchreichen.
2. **Den Kontext durchreichen**: Klassen bekommen die benötigten Dienste als
   Parameter, statt sie zu ziehen. Kleinerer Eingriff, dafür mehr Signaturen.

Beides gehört entschieden, bevor Inversify wirklich verschwinden kann. Für den
Zwischenstand ändert sich nichts: Die Spiegelung deckt beide Richtungen ab.
