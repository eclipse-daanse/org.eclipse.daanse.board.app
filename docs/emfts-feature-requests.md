# Feature Requests an @emfts/core

Ziel-Repository: <https://github.com/eclipse-fennec/emf.ts>
Getestet gegen: `@emfts/core@0.1.1-next.16`; FR-1 und FR-2 sind mit `0.2.0-next.1` behoben
Kontext: Ablösung der projekteigenen Ecore-Runtime durch `@emfts/core` in der
Daanse Board App ([Umsetzungsplan](./emfts-tsm-umsetzungsplan.md), Strang A)

Vorab: Die Umstellung ist **gelungen**. `@emfts/core` trägt als alleinige
Ecore-Runtime; die projekteigene Portierung (~26.000 LOC) konnte ersatzlos
entfallen. Besonders hilfreich war die Kompatibilitätsschicht für
`@masagroup/ecore` — sie hat den Aufwand von Wochen auf Tage gedrückt.

Die folgenden Punkte sind beim Einbau aufgefallen, in der Reihenfolge ihrer
Auswirkung. Jeder ist mit einem lauffähigen Minimalbeispiel belegt.

**Eingereicht am 11.08.2026** als Issues (Account `vwfox`, auf Englisch):

| | Issue |
|---|---|
| FR-1 | [#65 — eGenericType leaves the feature without any eType](https://github.com/eclipse-fennec/emf.ts/issues/65) — **behoben und geschlossen** in 0.2.0-next.1 |
| FR-2 | [#66 — Nested model elements (EOperation, EParameter) load as DynamicEObject](https://github.com/eclipse-fennec/emf.ts/issues/66) — **behoben in 0.2.0-next.1**, [bestätigt](https://github.com/eclipse-fennec/emf.ts/issues/66#issuecomment-5318280769) |
| FR-3 | [#67 — registerPackage() missing on a ResourceSet's package registry](https://github.com/eclipse-fennec/emf.ts/issues/67) |
| Anmerkungen | [#68 — Docs: mixed EList/array returns, and latest predates the masagroup compatibility layer](https://github.com/eclipse-fennec/emf.ts/issues/68) |

---

## FR-1 — `eGenericType` lässt das Feature ohne `eType` zurück

**Schwere:** hoch — es gehen Modellinformationen verloren, und zwar still.

Ein `EStructuralFeature`, dessen Typ über `eGenericType` statt über das
Attribut `eType` angegeben ist, kommt nach dem Laden **ohne jeden Typ** an.
Nicht nur die Typargumente fehlen, sondern `getEType()` liefert `null`.

### Reproduktion

```typescript
import { EResourceSetImpl, URI, type EPackage, type EClass } from '@emfts/core'

const MODELL = `<?xml version="1.0" encoding="UTF-8"?>
<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore"
    name="t" nsURI="http://test/generics" nsPrefix="t">
  <eClassifiers xsi:type="ecore:EClass" name="Holder">
    <eStructuralFeatures xsi:type="ecore:EReference" name="label" containment="false">
      <eGenericType eClassifier="http://test/generics#//Box">
        <eTypeArguments eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
      </eGenericType>
    </eStructuralFeatures>
    <eStructuralFeatures xsi:type="ecore:EAttribute" name="plain"
        eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
  </eClassifiers>
  <eClassifiers xsi:type="ecore:EClass" name="Box">
    <eTypeParameters name="T"/>
  </eClassifiers>
</ecore:EPackage>`

const rs = new EResourceSetImpl()
const resource = rs.createResource(URI.createURI('generics.ecore'))
resource.loadFromString!(MODELL)

console.log('Ladefehler:', resource.getErrors().length)
const holder = (resource.getContents().get(0) as EPackage)
  .getEClassifiers().get(0) as EClass
for (const f of holder.getEStructuralFeatures()) {
  console.log(f.getName(), '->', f.getEType()?.getName() ?? 'NULL')
}
```

**Ist:**

```
Ladefehler: 3
  [Line 8, Col 103] Feature 'eTypeArguments' has no parent object
  Unknown feature 'eGenericType' for type 'EReference'
label -> NULL
plain -> EString
```

**Soll:** `label -> Box`. Die Typargumente dürfen aus unserer Sicht gern
zunächst ignoriert werden — entscheidend ist, dass der Basistyp erhalten bleibt.

### Auswirkung bei uns

Acht Widget-Modelle typisieren ihre Konfigurationsfelder als
`VariableWrapper<EString>`, also über `eGenericType`. Alle diese Felder erscheinen
in der ausgelesenen Metadatenstruktur als `any` statt als ihr tatsächlicher Typ.
Beim Start der Anwendung erzeugt das zusätzlich dutzende Konsolenfehler.

Der Fehler ist deshalb unangenehm, weil er nicht zum Abbruch führt: Das Modell
lädt, die Klasse existiert, nur der Typ ist weg.

### Vorschlag

Im XMI-Handler `eGenericType` als Kindelement von `EStructuralFeature`,
`EOperation`, `EParameter` und `EClass` (`eSuperTypes`) verstehen und mindestens
das `eClassifier`-Attribut auf `eType` abbilden. Vollständige Generics-Unterstützung
(`EGenericType` als eigenes Modellelement mit `eTypeArguments`,
`eTypeParameters`, `eBound`) wäre die saubere Lösung; die Interfaces
`EGenericType` und `ETypeParameter` sind ja bereits vorhanden und werden aus
`index.ts` exportiert — sie werden vom Loader nur nicht gefüllt.

---

## FR-2 — Verschachtelte Modellelemente kommen als `DynamicEObject`

**Schwere:** mittel — Interface-Zusagen gelten zur Laufzeit nicht.

Beim Laden einer `.ecore`-Datei werden `EPackage`, `EClass` und `EAnnotation` als
typisierte Objekte materialisiert (`BasicEPackage`, `BasicEClass`,
`BasicEAnnotation`). Die darin verschachtelten `EOperation`, `EParameter` und die
Einträge einer Annotation-Detail-Map dagegen als `DynamicEObject`, das nur
`eClass()` und `eGet()` anbietet.

### Reproduktion

```typescript
const op = eClass.getEOperations()[0]
console.log(op.constructor.name)
// -> 'DynamicEObject'
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(op)))
// -> ['constructor', 'eClass', 'eGet']

op.getEAnnotation('meine/quelle')
// -> TypeError: op.getEAnnotation is not a function
```

`EModelElement` deklariert `getEAnnotation(source)`, und `BasicEOperation`
implementiert es auch — nur erzeugt der Loader an dieser Stelle keine
`BasicEOperation`.

### Auswirkung bei uns

Code, der gegen die Interfaces geschrieben ist, bricht zur Laufzeit. Wir lesen
diese Elemente deshalb reflektiv über `eGet()` und halten uns eine kleine
Hilfsschicht, die den typisierten Zugriff bevorzugt und sonst zurückfällt. Das
ist tragbar — reflektives Lesen eines Metamodells ist idiomatisches EMF —, aber
es überrascht, weil dieselbe Datei `EClass` typisiert liefert.

### Vorschlag

Im XMI-Loader die vorhandenen `Basic*`-Implementierungen auch für die
verschachtelten Elemente verwenden. Sollte das aus Aufwandsgründen nicht
kurzfristig gehen, wäre eine Notiz in der Dokumentation hilfreich, welche
Elemente typisiert ankommen und welche nicht — dann rechnet man damit.

---

## FR-3 — `registerPackage()` fehlt auf der Instanz-Registry

**Schwere:** gering — Bequemlichkeit.

`createPackageRegistry()` und `getPackageRegistry()` liefern eine Registry mit
`registerPackage(pkg)`, die den `nsURI` selbst aus dem Paket zieht. Die Registry
einer `ResourceSet`-Instanz — `resourceSet.getPackageRegistry()` — hat diese
Methode nicht, dort muss man

```typescript
const nsURI = pkg.getNsURI()
if (nsURI) resourceSet.getPackageRegistry().set(nsURI, pkg)
```

schreiben. Da der `nsURI` ohnehin am Paket hängt, wäre `registerPackage(pkg)` auf
`EPackageRegistry` die naheliegendere Schnittstelle — und beide Wege wären
gleich benutzbar.

---

## Anmerkungen ohne Handlungsbedarf

Zwei Beobachtungen, die uns beim Portieren Zeit gekostet haben und die
vielleicht in die Dokumentation passen — als Fehler betrachten wir sie nicht:

**Uneinheitliche Rückgabetypen für mehrwertige Features.**
`EPackage.getEClassifiers()` liefert eine `EList` (Zugriff über `size()`/`get(i)`),
`EClass.getEOperations()`, `getESuperTypes()` und `getEAllStructuralFeatures()`
dagegen native Arrays. Beim Portieren war das die häufigste Fehlerquelle, weil
`.size()` auf einem Array still ein `TypeError` wird. Eine Übersicht, welche
Zugriffe was liefern, würde helfen.

**`dist-tag latest` zeigt auf eine deutlich älteren Stand.** `latest` ist
`0.1.0`, `next` ist `0.1.1-next.16`. Die Kompatibilitätsschicht für
`@masagroup/ecore` — für uns der Grund, überhaupt umsteigen zu können — steckt
nur in `next`. Wer `npm install @emfts/core` ausführt, bekommt sie nicht und
schließt womöglich, sie existiere nicht.

---

## `@emfts/codegen` — aus der Generator-Bewertung (A5)

Geprüft gegen den lokalen Stand `@emfts/codegen@0.0.1-next.1`, Modell
`packages/lib/connection/base/model/model.ecore`. Ausführliche Herleitung in
der [Entscheidungsvorlage](./emfts-generator-entscheidung.md).

### FR-C1 — `decorator`- und `plain`-Modus brechen in der Operations-Schleife ab

Eingereicht: <https://github.com/eclipse-fennec/emf.ts.codegen/issues/24> —
**behoben, verifiziert am 2026-08-24** gegen lokalen Stand `45dea57`
(0.0.2-next.1): `decorator` und `plain` generieren für `lib.connection.rest`
fehlerfrei; Output strukturell äquivalent zu unserem Generator.

`init --mode decorator` erzeugt eine GenConfig, `generate` damit scheitert:

```
 >> 48| <% for (const genOp of operations) {
    49|   const op = genOp.ecoreOperation;
    50|   const opName = op.getName();

op.getName is not a function
```

Reproduzierbar mit `plain` ebenso; `emf` läuft mit derselben Konfiguration
durch. Das mitgelieferte `library.ecore` läuft im `emf`-Modus, sodass der
Fehler nicht am Modell hängt — geprüft an einem Modell **ohne** Operationen,
die Schleife läuft also über etwas, das dort gar nicht steht.

**Warum uns das betrifft:** Der `decorator`-Modus entspricht dem Ausgabestil
dieser Anwendung — 193 erzeugte Dateien mit `@ModelClass`/`@Attribute`. Der
`emf`-Modus erzeugt für dasselbe Modell 818 Zeilen statt 114, mit getrennten
Impl-, Factory- und Package-Dateien. Solange nur `emf` läuft, wäre ein
Wechsel kein Generatorwechsel, sondern ein Umbau der Modellschicht.

### FR-C2 — `href`-Verweise auf andere Pakete werden in `init` nicht aufgelöst

Eingereicht: <https://github.com/eclipse-fennec/emf.ts.codegen/issues/25> —
**behoben, verifiziert am 2026-08-24**: ohne `-d` jetzt eine klare Meldung,
mit `-d`/`--import-mapping` läuft `init` durch (exakt der Vorschlag).

Unsere Modelle bauen über Paketgrenzen hinweg aufeinander auf:

```xml
<eSuperTypes href="http://…lib.connection.base#//BaseConnectionConfig"/>
<eSubpackages href="http://…lib.connection.base#/"/>
```

`init -m …/rest/model/model.ecore` bricht ab:

```
Error: subPkg.getNsURI is not a function
```

Der Proxy bleibt unaufgelöst, und `init` hat — anders als `generate` — keine
Optionen `--dependency`/`--import-mapping`, um das abzufangen.

**Vorschlag:** `--dependency` und `--import-mapping` auch für `init`; und
unaufgelöste Proxies mit einer Meldung abweisen, die den fehlenden `nsURI`
nennt, statt mit `getNsURI is not a function`.

**Warum uns das betrifft:** Von 41 Modellen im Projekt nutzen die meisten
dieses Muster. Es ist die Art, wie unsere Modelle aufeinander aufbauen, kein
Randfall.

### FR-C3 — decorator-Modus: Annotationen aus geteiltem Paket importieren

Eingereicht: <https://github.com/eclipse-fennec/emf.ts.codegen/issues/26> —
**umgesetzt, verifiziert am 2026-08-24** gegen lokalen Stand `49f0abc`:
`-a/--annotations` auf `init` und `generate` importiert aus
`lib.annotations` (kein ModelAnnotations.ts mehr, Import byte-gleich zu
unserem Generator), und das Fallback nutzt `Symbol.for('emfts.*')`.
Damit ist der letzte Adoptions-Blocker weg; offen bleibt nur die
`@Documentation`-Emission (Notiz auf #24).

Bei der Verifikation von C1 gefunden: der decorator-Modus generiert pro
Modell ein eigenes `ModelAnnotations.ts` mit `Symbol('…')`-Keys — 41 Modelle
hießen 41 Dekorator-Kopien, deren Metadaten kein zentraler Leser
paketübergreifend sieht. Nötig ist eine Option wie unser `-a`
(Annotations-Import aus `lib.annotations`); solange die fehlt, bleibt
`tools/generator` unser Generator. Außerdem gemeldet: `@Documentation` wird
nicht emittiert, und beim GenConfig-Laden erscheint eine vermutlich
harmlose Forward-Ref-Warnung.

### FR-C4 — decorator-Modus: Enum-Literale werden ignoriert

Eingereicht: <https://github.com/eclipse-fennec/emf.ts.codegen/issues/28>

Probelauf 2026-08-24 (Stand `f750ebc`, drei Modelle im Diff gegen
`tools/generator`): Enums werden numerisch statt mit den
`EEnumLiteral`-Literalen emittiert (`eq = 0` statt `eq = '=='`) —
laufzeitbrechend, weil persistierte Konfigurationen die Literale tragen.

### FR-C5 — decorator-Modus: Wertsemantik der Features

Eingereicht: <https://github.com/eclipse-fennec/emf.ts.codegen/issues/29>

Aus demselben Probelauf, vier zusammengehörige Lücken: eTypeArguments
(Generics) fallen weg, Referenz-Defaults kommen als rohe Literale statt
Instanziierung (`= 12` an einem `VariableWrapper`), Attribut-Defaults und
Pflichtigkeit gehen verloren (`comparator?:` statt `= Comparator.eq`),
mehrwertige Features starten uninitalisiert statt `= []`.

### FR-C6/C7 — Vollmigration blockiert: extends aus Dependency-Modellen und Custom-Dekoratoren

Eingereicht: <https://github.com/eclipse-fennec/emf.ts.codegen/issues/30>
und <https://github.com/eclipse-fennec/emf.ts.codegen/issues/31>

Der Volllauf über alle 41 Modelle (Treiber ist umgestellt, GenConfigs
liegen bei den Modellen) deckte zwei Lücken auf, die der Drei-Modell-
Probelauf nicht traf: 17 Klassen verlieren ihr `extends` auf Supertypen
aus Dependency-/Geschwister-Modellen (`IconClickPayload extends
Payload`), und die `@WidgetAction`-Custom-Dekoratoren aus
eAnnotations (`source="<paket>/<Dekorator>"`) samt Options-Objekt aus
den details werden nicht emittiert (5 Dateien, trägt die
Action-Metadaten des Event-Systems). Dazu 26 verlorene optionale
Operationsparameter. Die gen-Ausgaben sind bis dahin auf dem Stand von
`tools/generator` zurückgehalten; `npm run generate_models` fährt schon
den neuen Treiber.

**Probelauf bestanden (2026-08-24, Stand `b709b5d`):** Der Volldiff über
`connection.rest`, `text.plain` und `events/MappingModel` ist **leer** —
null echte Abweichungen gegen `tools/generator`, modulo der bewusst
akzeptierten Verbesserungen (`unknown` statt `any`, `T[]` statt
`Array<T>`, Klassen-/Feature-Doku, `.js`-Import-Endungen). C4 (#28) und
C5 (#29, inkl. Dekorator-Name- und Import-Mapping-Nachzügler) sind
verifiziert. Der Vollumstieg der 41 Modelle kann starten.

**Frühere Zwischenfazite:** @Documentation (C1/#27), Cross-Package (C2/#25) und
geteilte Annotationen (C3/#26) sind verifiziert; Struktur, Imports und
Doku sind adoptionsreif — Klassen-Doku emittiert der codegen sogar
zusätzlich, und `.js`-Endungen auf relativen Imports sind ESM-korrekter
als unser Output. Der Umstieg wartet auf C4/C5.

### Keine Lücke (Korrektur zu unserer früheren Annahme)

Wir hatten `--no_factories` als fehlend notiert. Im `emf`-Modus lässt sich
das über `generateFactory="false"` in der GenConfig ausdrücken — erledigt.
