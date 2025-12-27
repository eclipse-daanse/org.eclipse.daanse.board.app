# Ecore-basiertes Event Action System

Das Event Action System wurde erweitert, um Widget-Actions direkt aus Ecore-Modellen zu laden, anstatt sie über TypeScript-Decorators zu definieren.

## Überblick

Statt Widget-Actions mit `@WidgetAction` Decorators in TypeScript zu definieren, können Actions jetzt direkt in `.ecore` Dateien modelliert und zur Laufzeit geladen werden. Das System liest die Ecore-Modelle, extrahiert die `EOperation`s mit `@WidgetAction` Annotationen und registriert sie automatisch.

## Vorteile

- **Modellgetrieben**: Widget-Actions sind Teil des Ecore-Modells
- **Keine Code-Generierung nötig**: Actions werden direkt aus dem Modell gelesen
- **Introspection**: Vollständige Metadaten über Parameter-Typen, Optionalität, etc.
- **Zentrale Definition**: Actions, Events und Settings in einem Modell

## Ecore-Modell Struktur

### Beispiel: MapWidgetInterface mit zoomToThing Action

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore"
                name="MapSettings"
                nsURI="http://org.eclipse.daanse.board.app.ui.vue.widget.map"
                nsPrefix="MapSettings">

    <!-- Widget Interface mit Actions -->
    <eClassifiers xsi:type="ecore:EClass" name="MapWidgetInterface" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for Map Widget operations."/>
        </eAnnotations>

        <!-- Widget Action: zoomToThing -->
        <eOperations name="zoomToThing">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Zooms the map to a specific Thing location."/>
            </eAnnotations>

            <!-- WidgetAction Annotation -->
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.zoomToThing"/>
            </eAnnotations>

            <!-- Parameter: thingId (required) -->
            <eParameters name="thingId"
                         eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                         lowerBound="1">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="ID of the Thing to zoom to."/>
                </eAnnotations>
            </eParameters>

            <!-- Parameter: zoom (optional, default: 16) -->
            <eParameters name="zoom"
                         eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
                         lowerBound="0"
                         defaultValueLiteral="16">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Optional zoom level to apply (default: 16)."/>
                </eAnnotations>
            </eParameters>

            <!-- Parameter: duration (optional, default: 1000) -->
            <eParameters name="duration"
                         eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
                         lowerBound="0"
                         defaultValueLiteral="1000">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Optional animation duration in milliseconds (default: 1000)."/>
                </eAnnotations>
            </eParameters>
        </eOperations>
    </eClassifiers>

</ecore:EPackage>
```

### Wichtige Attribute

- **`eOperations name="..."`**: Name der Action-Methode
- **`eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction"`**: Markiert die Operation als Widget-Action
- **`details key="eventType"`**: Event-Typ für die Action (optional, default: `widgetType.methodName`)
- **`eParameters`**:
  - `name`: Parameter-Name
  - `eType`: Ecore-Datentyp (z.B. `EString`, `EInt`, `EBoolean`)
  - `lowerBound="0"`: Parameter ist optional
  - `lowerBound="1"`: Parameter ist required
  - `defaultValueLiteral`: Default-Wert

## Verwendung

### 1. Widget-Actions aus Ecore-Model registrieren

```typescript
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events';

const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

// Aus URI laden (fetch)
await actionsRegistry.registerWidgetTypeFromEcore('MapWidget', './model/model.ecore');

// Oder aus String laden
const data = await fetch('Conference.ecore');
const dataAsText = await data.text();
await actionsRegistry.registerWidgetTypeFromEcoreString('ConferenceWidget', dataAsText, 'conference.ecore');
```

### 2. Registrierte Actions abrufen

```typescript
// Widget-Typ abrufen
const widgetType = actionsRegistry.getWidgetType('MapWidget');

// Actions anzeigen
console.log(widgetType?.actions);
// [
//   {
//     methodName: 'zoomToThing',
//     eventType: 'map.zoomToThing',
//     parameters: ['thingId: string', 'zoom?: number', 'duration?: number']
//   }
// ]
```

### 3. Manuelle Verwendung des EcoreMetadataService

```typescript
import { EcoreMetadataService, ECORE_METADATA_SERVICE } from 'org.eclipse.daanse.board.app.lib.events';

const ecoreService = container.get<EcoreMetadataService>(ECORE_METADATA_SERVICE);

// Modell laden
await ecoreService.loadModel('MyWidget', 'mywidget.ecore');

// Actions extrahieren
const actions = ecoreService.extractActions('MyWidget');

// Ergebnis:
// [
//   {
//     methodName: 'zoomToThing',
//     eventType: 'map.zoomToThing',
//     parameters: [
//       { name: 'thingId', type: 'string', optional: false, index: 0 },
//       { name: 'zoom', type: 'number', optional: true, index: 1 },
//       { name: 'duration', type: 'number', optional: true, index: 2 }
//     ]
//   }
// ]
```

### 4. Widget-Registrierung mit Fallback

```typescript
const register = async () => {
  const actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

  // Versuche aus Ecore zu laden, falle zurück auf Decorator-basiert
  try {
    await actionsRegistry.registerWidgetTypeFromEcore('MapWidget', './model/model.ecore');
  } catch (error) {
    console.error('Failed to register from Ecore, using decorators:', error);
    actionsRegistry.registerWidgetType('MapWidget', MapWidgetInterface);
  }
};
```

## Type Mapping

Das System mappt Ecore-Datentypen auf TypeScript-Typen:

| Ecore Type      | TypeScript Type |
|-----------------|-----------------|
| `EString`       | `string`        |
| `EInt`          | `number`        |
| `EDouble`       | `number`        |
| `EFloat`        | `number`        |
| `EBoolean`      | `boolean`       |
| `EDate`         | `Date`          |
| `ELong`         | `number`        |
| `EBigInteger`   | `number`        |
| `EBigDecimal`   | `number`        |
| `EJavaObject`   | `any`           |
| `EByteArray`    | `Uint8Array`    |

## Services

### EcoreMetadataService

Verantwortlich für:
- Laden von Ecore-Modellen (URI oder String)
- Parsen der Ecore-Modelle mit der Ecore-Bibliothek
- Extrahieren von Actions aus `EOperation`s
- Type-Mapping von Ecore zu TypeScript

**Key Methods:**
- `loadModel(widgetType, ecoreUri)`: Lädt Modell von URI
- `loadModelFromString(widgetType, content, uri)`: Lädt Modell von String
- `extractActions(widgetType)`: Extrahiert Actions aus geladenem Modell
- `getResourceSet()`: Gibt ResourceSet zurück für manuelle Operationen

### EventActionsRegistry

Erweitert um:
- `registerWidgetTypeFromEcore(widgetType, ecoreUri)`: Registriert Widget aus Ecore-URI
- `registerWidgetTypeFromEcoreString(widgetType, content, uri)`: Registriert Widget aus Ecore-String
- `setEcoreMetadataService(service)`: Verbindet mit EcoreMetadataService

## Best Practices

1. **WidgetAction Annotation**: Immer `org.eclipse.daanse.board.app.lib.events/WidgetAction` als source verwenden
2. **Event Type**: Event-Typ als Detail-Key `eventType` setzen (optional)
3. **Documentation**: GenModel-Annotationen für Dokumentation nutzen
4. **Parameter-Optionalität**: `lowerBound="0"` für optionale, `lowerBound="1"` für required Parameter
5. **Default Values**: `defaultValueLiteral` für Default-Werte setzen
6. **Abstract Interface**: Widget-Interface als `abstract="true"` markieren

## Migration von Decorator-basiert zu Ecore-basiert

### Vorher (Decorator-basiert)

```typescript
export abstract class MapWidgetInterface {
  @WidgetAction({ eventType: 'map.zoomToThing' })
  abstract zoomToThing(
    @ActionParameter() thingId: string,
    @ActionParameter() zoom?: number,
    @ActionParameter() duration?: number
  ): void | Promise<void>;
}
```

### Nachher (Ecore-basiert)

```xml
<eOperations name="zoomToThing">
    <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="map.zoomToThing"/>
    </eAnnotations>
    <eParameters name="thingId" eType="...#//EString" lowerBound="1"/>
    <eParameters name="zoom" eType="...#//EInt" lowerBound="0" defaultValueLiteral="16"/>
    <eParameters name="duration" eType="...#//EInt" lowerBound="0" defaultValueLiteral="1000"/>
</eOperations>
```

## Beispiel-Projekt

Siehe:
- `packages/lib/events/src/examples/loadEcoreModel.example.ts` - Vollständiges Beispiel
- `packages/ui/vue/widget/map/model/model.ecore` - Ecore-Modell mit Widget-Actions
- `packages/ui/vue/widget/map/src/index.ts` - Widget-Registrierung
