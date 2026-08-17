# Feature Request: Widgets für Betriebs-Dashboards (KPI, Sparkline, Status)

Stand: 2026-08-11 · Art: Sammel-Issue (Epic) mit sechs einzeln umsetzbaren Teil-Issues
Vorgeschlagene Labels für das Sammel-Issue: `Widgets`, `usecase-related`, `med`

Grundlage der Analyse: Nachbau eines Betriebs-Dashboards (Leitstand eines Freizeitbads —
Besucherzahlen, Wasserwerte aus Beckensensoren, Auslastungsanzeigen) mit dem
Widget-Bestand dieses Repos, Stand `0.0.1-next.1`.

## Übersicht der Teil-Issues

| # | Titel zum Einreichen | Labels | Umfang |
|---|---|---|---|
| 1 | `StatWidget: Kennzahl-Kachel mit Label, Wert und Veränderung` | `Widgets`, `good first issue` | neues Paket |
| 2a | `KPI-Status dreistufig: Warnstufe zwischen grün und rot` | `Widgets`, `med` | Änderung an `KpiStatusCell` |
| 2b | `StatusWidget: eigenständige Ampel mit Grenzwertintervallen` | `Widgets`, `good first issue` | neues Paket |
| 3 | `SparklineWidget: Verlaufskurve ohne Achsen und Legende` | `Widgets`, `good first issue` | neues Paket |
| 4 | `Bedingte Formatierung im DataTableWidget` | `Widgets`, `Settings` | Refaktorierung + Feature |
| 5 | `Zahlenformatierung für Widgets (Intl.NumberFormat)` | `Widgets`, `med` | Hilfsfunktion + Anbindung |
| — | `Chart-Composer: --e[set] dekrementiert jeden Wert um 1` | `Composer Chart`, `high` | Bugfix, eigenes Issue |

---

## Ausgangslage

Bei dem Versuch, ein klassisches Betriebs-Dashboard mit der Board App nachzubauen — konkret einen Leitstand für ein Freizeitbad mit Besucherzahlen, Wasserwerten aus Beckensensoren und Auslastungsanzeigen — deckt die vorhandene Widget-Sammlung den größten Teil bereits ab. Die Datenanbindung ist für diesen Anwendungsfall sogar besonders gut geeignet: MQTT und WebSocket liefern Sensorwerte als Push, OGC SensorThings ist als Datasource-Typ fertig vorhanden, `ChartWidget` und `ProgressWidget` passen unmittelbar.

Es fehlen jedoch fünf Bausteine, die in praktisch jedem Betriebs-Dashboard vorkommen. Jeder einzelne lässt sich heute umgehen, aber jede Umgehung kostet mehrere Widgets, eine Hilfs-Variable oder handgeschriebenes SVG — und muss pro Board neu gebaut werden.

Die Teil-Issues sind nach Nutzen pro Aufwand sortiert. Teil-Issue 1 hat den größten Hebel.

---

## Teil-Issue 1 — `StatWidget`: Kennzahl-Kachel mit Veränderung

### Problem

Es gibt kein Widget für die häufigste Anzeige eines Dashboards überhaupt: eine große Zahl mit Beschriftung und einer Angabe zur Veränderung. Heute baut man das aus einem `TextWidget` für die Zahl, einem zweiten `TextWidget` für das Label und optional einem `ProgressWidget` — also drei Widgets, die man von Hand aufeinander ausrichtet und deren Positionen bei jeder Layout-Änderung wieder auseinanderlaufen. Für ein Dashboard mit acht Kennzahlen sind das rund 24 Widgets statt acht.

### Vorschlag

Ein Widget `StatWidget` im Paket `packages/ui/vue/widget/stat/`, registriert analog zu `ProgressWidget` (`packages/ui/vue/widget/progress/src/index.ts`) mit `supportedDSTypes: []`, damit es wie `TextWidget` frei über Variablen gespeist werden kann.

Settings-Entwurf, orientiert an `packages/ui/vue/widget/progress/src/gen/ProgressSettings.ts`:

```ts
@ModelClass({ type: 'http://www.example.org/statwidgets#//StatSettings' })
export class StatSettings {
  @Reference('VariableWrapper') label: VariableWrapper<string>       // "Besucher heute"
  @Reference('VariableWrapper') value: VariableWrapper<string>       // Hauptwert
  @Reference('VariableWrapper') unit: VariableWrapper<string>        // "€", "°C", "/ 1.200"
  @Reference('VariableWrapper') caption: VariableWrapper<string>     // Fußzeile

  // Veränderungsanzeige
  @Reference('VariableWrapper') deltaValue: VariableWrapper<string>
  @Enum('DeltaDirection') deltaDirection: DeltaDirection = DeltaDirection.AUTO
  @Enum('DeltaPolarity') deltaPolarity: DeltaPolarity = DeltaPolarity.HIGHER_IS_BETTER
  @Attribute() showDeltaIcon: boolean = true

  // Optik
  @Reference('VariableWrapper') valueColor / labelColor / deltaGoodColor / deltaBadColor: VariableWrapper<string>
  @Reference('VariableWrapper') valueFontSize: VariableWrapper<string>
  @Enum('HorizontalAlign') align: HorizontalAlign = HorizontalAlign.LEFT
}
```

`DeltaDirection` mit `AUTO | UP | DOWN | NEUTRAL`: bei `AUTO` leitet das Widget die Richtung aus dem Vorzeichen von `deltaValue` ab. `DeltaPolarity` mit `HIGHER_IS_BETTER | LOWER_IS_BETTER` entscheidet, ob „aufwärts" grün oder rot dargestellt wird — bei Besucherzahlen ist mehr gut, bei Wartezeiten schlecht. Diese Trennung ist wichtig, weil sonst pro Kachel eine eigene Farbvariable nötig wäre.

Rahmen, Titel, Hintergrund und Schatten kommen wie bei allen Widgets aus `WrapperSettings`; das Widget selbst zeichnet nur seinen Inhalt.

### Nutzen

Acht Kennzahlen sind acht Widgets statt 24, und die Kacheln einer Reihe sehen ohne manuelles Ausrichten gleich aus.

---

## Teil-Issue 2 — Dreistufiger Status statt binär

### Problem

Statusanzeigen gibt es heute nur als Zelle innerhalb der KPI-Tabelle (`packages/ui/vue/common/kpi/src/KpiStatusCell.vue`), und sie sind zweiwertig. Die Auswertung lautet:

```js
statusValue > 0.5 ? '🟢' : '🛑'
```

Damit gibt es kein „noch in Ordnung, aber beobachten". Genau dieser Zustand ist im Betrieb aber der wichtigste: Ein Chlorwert von 0,58 mg/l bei einem Grenzwert von 0,6 mg/l ist nicht rot — er ist der Grund, warum jemand nachdosiert, bevor er rot wird. Ein Dashboard, das nur grün und rot kennt, meldet Probleme erst, wenn sie eingetreten sind.

Zusätzlich ist die Anzeige an die KPI-Tabelle gebunden. Ein einzelner Statuspunkt neben einer Kennzahl ist nicht möglich, ohne ein `SVGWidget` mit datengebundenen Füllfarben (`SvgConfigItem`) von Hand zu bauen.

### Vorschlag

Zwei Teile, die unabhängig voneinander nutzbar sind:

**a) `KpiStatusCell` auf drei Stufen erweitern.** Zwei Schwellwerte statt einer festen `0.5`-Grenze, konfigurierbar in `KpiTableWidgetSettings.vue`:

```ts
@Reference('VariableWrapper') statusWarnThreshold: VariableWrapper<string>   // Default 0.5
@Reference('VariableWrapper') statusGoodThreshold: VariableWrapper<string>   // Default 0.8
```

Damit ergibt sich `< warn` → kritisch, `warn … good` → Warnung, `>= good` → in Ordnung. Für `Lights` kommt 🟡 als dritte Ausgabe hinzu, für `Badge` die Farbe `warning`. Passende Werte sind im Projekt bereits als Design-Token vorhanden und müssen nicht neu erfunden werden — `packages/app/default/src/assets/main.css` definiert `--color-success: #3D9209`, `--color-warning: #FFD43A` und `--color-danger: #E42222`. Der dritte Zustand hat also schon eine Farbe, ihm fehlt nur die Logik.

Rückwärtskompatibel: mit den Defaults 0.5/0.5 verhält sich das Widget exakt wie heute.

**b) Ein eigenständiges `StatusWidget`** im Paket `packages/ui/vue/widget/status/`, das denselben dreistufigen Zustand als Punkt, Pille oder Balken darstellt und frei auf dem Board platziert werden kann:

```ts
@ModelClass({ type: 'http://www.example.org/statuswidgets#//StatusSettings' })
export class StatusSettings {
  @Reference('VariableWrapper') value: VariableWrapper<string>
  @Reference('VariableWrapper') warnBelow / warnAbove: VariableWrapper<string>
  @Reference('VariableWrapper') critBelow / critAbove: VariableWrapper<string>
  @Reference('VariableWrapper') label: VariableWrapper<string>
  @Enum('StatusShape') shape: StatusShape = StatusShape.DOT   // DOT | PILL | BAR | ICON
  @Attribute() showValue: boolean = true
}
```

Die Angabe der Grenzen als Intervall (`warnBelow`/`warnAbove` und `critBelow`/`critAbove`) statt als einzelne Schwelle ist für Messwerte notwendig: Ein pH-Wert ist bei 6,2 *und* bei 7,9 kritisch, nicht nur in einer Richtung. Genau das ist mit einer Einzelschwelle nicht ausdrückbar, und es ist der Grund, warum die Grenzwertlogik heute in `ComputedVariable`-Ausdrücke ausweichen muss.

### Barrierefreiheit

Damit Zustand nicht allein über Farbe transportiert wird, sollten alle drei Stufen zusätzlich ein Symbol oder eine Textbeschriftung tragen — bei `Lights` ist das durch die Emoji-Form schon gegeben, bei `PILL` und `BAR` bitte über `label` bzw. ein optionales Icon.

---

## Teil-Issue 3 — `SparklineWidget`: Verlaufskurve ohne Achsen

### Problem

Für die kleine Verlaufskurve neben einem Messwert — 24 Stunden Temperatur auf 40 Pixel Höhe — gibt es kein passendes Element. Das `ChartWidget` funktioniert technisch, ist aber für den Zweck überdimensioniert: Man schaltet Achsen, Gitter, Legende und Tooltip einzeln ab, und jede Sparkline bleibt ein vollwertiges Chart.js-Diagramm mit eigener Instanz. Bei zwölf Beckensensoren sind das zwölf Chart-Instanzen für zwölf Linien.

### Vorschlag

Ein `SparklineWidget` in `packages/ui/vue/widget/sparkline/` mit `supportedDSTypes: ['rest', 'csv']`, das eine `DataTable` erwartet und daraus eine Spalte zeichnet — als reines Inline-SVG ohne Chart-Bibliothek:

```ts
@ModelClass({ type: 'http://www.example.org/sparklinewidgets#//SparklineSettings' })
export class SparklineSettings {
  @Reference('VariableWrapper') valueColumn: VariableWrapper<string>
  @Enum('SparklineMode') mode: SparklineMode = SparklineMode.LINE   // LINE | AREA | BARS
  @Reference('VariableWrapper') lineColor / fillColor: VariableWrapper<string>
  @Reference('VariableWrapper') strokeWidth: VariableWrapper<string>
  @Attribute() showLastPoint: boolean = true
  @Attribute() showMinMax: boolean = false
  @Reference('VariableWrapper') yMin / yMax: VariableWrapper<string>   // leer = automatisch
}
```

`showLastPoint` markiert den aktuellen Wert als Punkt — das ist bei einer Sparkline die eigentliche Information, weil sie sonst nur eine Form ohne Bezug zur Gegenwart ist. Feste `yMin`/`yMax` sind wichtig, damit mehrere Sparklines derselben Größe vergleichbar bleiben; bei automatischer Skalierung sieht eine Schwankung von 0,1 °C genauso dramatisch aus wie eine von 10 °C.

Bewusst kein Tooltip und keine Interaktion — eine Sparkline ist eine Form, kein Diagramm. Wer Werte ablesen will, nimmt das `ChartWidget`.

---

## Teil-Issue 4 — Bedingte Formatierung im `DataTableWidget`

### Problem

Farbige Zellen in Abhängigkeit vom Wert gibt es nur in der Pivot-Tabelle (`ConditionalFormat` in `packages/ui/vue/widget/table/pivot/`). Die Pivot-Tabelle hängt aber an XMLA/OLAP. Wer seine Daten per REST oder MQTT bekommt — also im gesamten Sensorik- und IoT-Anwendungsfall — nutzt `DataTableWidget` und hat dort keine Möglichkeit, eine Statusspalte oder einen Grenzwertverstoß hervorzuheben. Eine Tabelle mit 20 Messwerten, in der die zwei auffälligen nicht auffallen, verfehlt ihren Zweck.

### Vorschlag

Die vorhandene `ConditionalFormat`-Struktur aus dem Pivot-Widget für `DataTableWidget` wiederverwenden, statt eine zweite Implementierung aufzubauen. Pro Regel: Zielspalte, Vergleichsoperator, Schwellwert (variablen-fähig), Hintergrund- und Textfarbe. Mehrere Regeln pro Spalte, erste passende gewinnt.

Wenn sich die Struktur nicht direkt teilen lässt, wäre der saubere Weg, sie in ein gemeinsames Paket unter `packages/ui/vue/common/` zu ziehen — analog zu `packages/ui/vue/common/kpi/`, das schon heute von der KPI-Tabelle genutzt wird.

---

## Teil-Issue 5 — Formatierung von Zahlen und Werten

### Problem

Es gibt keine Formatierungsschicht. Eine Suche nach `Intl.NumberFormat` oder `toLocaleString` über `packages/ui/vue/widget/` findet ausschließlich **Datums**formatierung in `TimelineWidget`, `WeatherWidget` und den Karten-Einstellungen — für Zahlen existiert nichts.

Praktisch heißt das: `1482` erscheint als `1482`, nicht als `1.482`. Ein Geldbetrag braucht ein separat gepflegtes Textfeld für das Währungszeichen. Eine Dauer von 161 Minuten lässt sich nicht als `2:41 h` anzeigen. Alle diese Umwandlungen müssen entweder in der Datenquelle passieren — was bedeutet, dass ein Messwert als Zeichenkette geliefert wird und damit für Diagramme und Grenzwertvergleiche unbrauchbar ist — oder in einer `ComputedVariable` pro Wert von Hand nachgebaut werden.

### Vorschlag

Ein gemeinsam genutztes Format-Attribut, das Widgets mit Zahlenausgabe (`StatWidget`, `TextWidget`, `ProgressWidget`, `DataTableWidget`, `KpiTableWidget`) anbieten:

```ts
@Enum('ValueFormat') format: ValueFormat = ValueFormat.NONE
// NONE | NUMBER | PERCENT | CURRENCY | BYTES | DURATION
@Reference('VariableWrapper') decimals: VariableWrapper<string>
@Reference('VariableWrapper') locale: VariableWrapper<string>      // Default: Browser-Locale
@Reference('VariableWrapper') currency: VariableWrapper<string>    // ISO-Code, z. B. EUR
@Attribute() compact: boolean = false                              // 1,5 Mio. statt 1.482.000
```

Die Umsetzung ist eine einzelne Hilfsfunktion auf Basis von `Intl.NumberFormat` in `packages/lib/utils/helpers/` (dort liegen mit `extractDataByPath` und `getValueByPath` schon vergleichbare Helfer). Die Widgets rufen sie nur auf. Das Locale sollte standardmäßig aus dem Browser kommen und nicht fest verdrahtet sein — die App ist über `packages/lib/i18next` bereits mehrsprachig angelegt.

Nebeneffekt: Zahlenspalten in Tabellen sollten bei aktivierter Formatierung `font-variant-numeric: tabular-nums` erhalten, damit Ziffern in Spalten untereinander stehen.

---

## Nicht Teil dieses Requests

Zwei Punkte sind bei derselben Analyse aufgefallen, gehören aber nicht hierher und sollten eigene Issues bekommen:

**Fehler im Chart-Composer.** In `packages/lib/composer/chart/src/classes/index.ts:182` steht

```js
data: data.items.map((e: any) => --e[set]),
```

Der Prä-Dekrement-Operator zieht von jedem Diagrammwert 1 ab und verändert dabei zusätzlich die Quelldaten im Speicher. Gemeint war mit hoher Wahrscheinlichkeit `+e[set]` als numerische Konvertierung. Bei Besucherzahlen fällt der Fehler nie auf, bei einem pH-Wert von 7,2 statt 8,2 schon. Das ist ein Einzeiler und sollte unabhängig von diesem Request als Bug eingetragen werden.

**Theme-Fähigkeit und Dark Mode.** Widget-Farben werden heute als konkrete Hex-Werte im Settings-Schema gespeichert und referenzieren keine Theme-Tokens; ein Umschalten hell/dunkel zieht bestehende Boards nicht mit. Das ist ein Architekturthema, das in `docs/mdx-workbench-integration-plan.md` schon angerissen ist, und es ist deutlich größer als die hier vorgeschlagenen Widgets. Relevant wird es hier nur insofern, als neue Widgets ihre Default-Farben besser aus einer zentralen Stelle beziehen sollten, damit sie später mitwandern.

---

## Reihenfolge

Die Teile sind unabhängig, aber diese Reihenfolge liefert am schnellsten sichtbaren Nutzen:

1. **Teil-Issue 1 (`StatWidget`)** — größter Hebel, keine Abhängigkeiten
2. **Teil-Issue 2a (dreistufiger Status in der KPI-Tabelle)** — kleine, rückwärtskompatible Änderung an vorhandenem Code
3. **Teil-Issue 5 (Formatierung)** — eine Hilfsfunktion, danach in allen Widgets nutzbar; `StatWidget` profitiert direkt
4. **Teil-Issue 3 (`SparklineWidget`)** — eigenständiges Paket, kein Eingriff in Bestehendes
5. **Teil-Issue 2b (`StatusWidget`)** — baut auf der Schwellwertlogik aus 2a auf
6. **Teil-Issue 4 (bedingte Formatierung)** — am besten zusammen mit einer Refaktorierung von `ConditionalFormat` in ein gemeinsames Paket

Teil-Issues 1, 3 und 2b sind neue, isolierte Pakete und damit gut als `good first issue` geeignet.
