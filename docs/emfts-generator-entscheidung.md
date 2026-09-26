# A5 — Entscheidungsvorlage: `@emfts/codegen` oder `tools/generator/main.js`

Stand: 2026-08-19 · geprüft gegen `@emfts/codegen@0.0.1-next.1` (lokaler Stand
in `EMFTs/emfts-codegen`) und `tools/generator/main.js` (14 572 Zeilen)

Der Plan sah für A5 einen Vergleich vor: ein Modell mit beiden Generatoren
erzeugen, die Ausgaben diffen, daraus die Lückenliste ableiten. Das Ergebnis
weicht von der Erwartung ab — die beiden erzeugen nicht dasselbe in
unterschiedlicher Güte, sondern **verschiedene Dinge**.

## Empfehlung

**Noch nicht wechseln.** Nicht wegen einzelner fehlender Optionen, sondern
weil der Ausgabestil, den dieses Projekt verwendet, in `@emfts/codegen`
derzeit nicht lauffähig ist. Die Bedingungen für eine Neubewertung stehen
unten.

Unabhängig davon sollte der **vorhandene Generator repariert** werden: er
erzeugt heute vier syntaktisch ungültige Dateien.

---

## 1. Was die beiden erzeugen

Geprüft an `packages/lib/connection/base/model/model.ecore` — drei
Klassifizierer, keine Operationen, keine Untermodelle.

| | `tools/generator/main.js` | `@emfts/codegen` (Modus `emf`) |
|---|---|---|
| Dateien | 3 | 9 |
| Zeilen | 114 | 818 |
| Erzeugt | eine Klasse je Klassifizierer | Interface + Impl + Factory + Package + Index |
| Laufzeitbindung | `lib.annotations` (projekteigen) | `@emfts/core` |

Der Unterschied im Erzeugnis:

```typescript
// tools/generator/main.js — eine Klasse, Metadaten als Decorator
@ModelClass({type:'http://…lib.connection.base#//BaseConnectionConfig'})
export abstract class BaseConnectionConfig {
  @Attribute() url?: string;
  @Attribute() name?: string;
}
```

```typescript
// @emfts/codegen, Modus emf — getrennte Schnittstelle …
export interface BaseConnectionConfig extends EObject {
  url?: string;
  name?: string;
}
// … plus BaseConnectionConfigImpl, BaseconnectionFactory, BaseconnectionPackage
```

Beides ist legitim. Das erste ist eine schlanke Typbeschreibung mit
Metadaten; das zweite das EMF-Vollprogramm mit Reflexion, Factory und
Package-Registrierung. Die Anwendung nutzt heute durchgängig das erste: 193
erzeugte Dateien in 37 `gen`-Verzeichnissen, alle mit `@ModelClass`,
`@Attribute`, `@Reference`.

## 2. Warum ein Wechsel heute nicht geht

`@emfts/codegen` kennt drei Modi. Zwei davon scheitern:

| Modus | Ergebnis am Projektmodell |
|---|---|
| `emf` | ✅ 9 Dateien |
| `plain` | ❌ `op.getName is not a function` |
| `decorator` | ❌ `op.getName is not a function` |

Ausgerechnet `decorator` — der Modus, der unserem Ausgabestil entspräche —
ist nicht lauffähig. Der Fehler steckt in der Operations-Schleife der
Vorlage; das Beispielmodell des Pakets selbst (`library.ecore`, Modus `emf`)
läuft durch, das Problem ist also modus-, nicht projektspezifisch.

Zweite Hürde: **Modellvererbung über Paketgrenzen.** Unsere Modelle verweisen
mit `eSubpackages href` und `eSuperTypes href` auf andere Pakete:

```xml
<eSuperTypes href="http://…lib.connection.base#//BaseConnectionConfig"/>
<eSubpackages href="http://…lib.connection.base#/"/>
```

Schon `init` bricht daran ab (`subPkg.getNsURI is not a function`) — der
Proxy wird nicht aufgelöst. Der `generate`-Befehl hat für diesen Fall
`--dependency` und `--import-mapping`, `init` nicht. Von 41 Modellen im
Projekt nutzen die meisten dieses Muster; es ist kein Randfall, sondern die
Art, wie die Modelle aufeinander aufbauen.

## 3. Was gegen den vorhandenen Generator spricht

Er ist nicht fehlerfrei. Mehrzeilige `documentation`-Annotationen landen
unescaped in einem einfachen String-Literal:

```typescript
@Documentation("The base URL endpoint for the REST API.
                    This attribute overrides the 'url' from BaseConnectionConfig
                    to specify its role in REST connections.")
```

Das ist ungültiges TypeScript — `error TS1002: Unterminated string literal`.
Betroffen sind **4 der 193** erzeugten Dateien:

- `lib/connection/graphql/src/gen/IGraphQLConnectionConfiguration.ts`
- `lib/connection/mqtt/src/gen/IMQTTConnectionConfiguration.ts`
- `lib/connection/rest/src/gen/IRestConnectionConfig.ts`
- `lib/connection/rss/src/gen/IRssConnectionConfiguration.ts`

Die Pakete bauen trotzdem, weil ihr Build-Skript `vite build` ohne
vorgeschalteten Typcheck ausführt — dieselbe Lücke, die schon bei B4 auffiel.

Die Behebung ist klein: im Template den Wert als Template-Literal ausgeben
oder Zeilenumbrüche escapen. Das ist unabhängig von der Generatorfrage fällig
und sollte nicht auf sie warten.

## 4. Bedingungen für eine Neubewertung

Ein Wechsel wird sinnvoll, wenn **alle drei** erfüllt sind:

1. **`decorator`-Modus läuft** — sonst müssten 193 Dateien und alle
   Konsumenten auf den EMF-Stil umgestellt werden. Das wäre kein
   Generatorwechsel mehr, sondern ein Umbau der Modellschicht.
2. **`eSubpackages`/`eSuperTypes` über `href` werden aufgelöst**, auch in
   `init`. Ohne das ist die Vererbung zwischen unseren Modellen nicht
   abbildbar.
3. **Das Annotations-Paket ist geklärt.** Der erzeugte Code hängt heute an
   `lib.annotations` (projekteigen). Entweder erzeugt `@emfts/codegen`
   dagegen, oder `@emfts/core` bietet eine Entsprechung, oder wir stellen die
   Konsumenten um.

Erst wenn 1 und 2 erfüllt sind, lohnt der eigentliche Diff — der heute
mangels lauffähigem `decorator`-Modus gar nicht erstellbar ist.

## 5. Was sich seit dem Plan geändert hat

Der Plan nannte als bekannte Lücken `--no_factories` und `lib.annotations`.
Beide bleiben gültig, sind aber nicht das Ausschlaggebende: `--no_factories`
ist im `emf`-Modus über `generateFactory="false"` in der GenConfig abbildbar,
also keine Lücke mehr. Ausschlaggebend sind die zwei Punkte oben, die im Plan
nicht vorkamen, weil sie erst beim Ausführen sichtbar wurden.

## 6. Nächste Schritte

| | Schritt | Wer |
|---|---|---|
| 1 | Template-Defekt bei mehrzeiligem `@Documentation` beheben, vier Dateien neu erzeugen | dieses Projekt |
| 2 | Typcheck in den Build der betroffenen Pakete ziehen, damit so etwas auffällt | dieses Projekt |
| 3 | Feature Requests zu `decorator`-Modus und `href`-Auflösung | an emfts |
| 4 | Neubewertung, sobald 3 beantwortet ist | dieses Projekt |
