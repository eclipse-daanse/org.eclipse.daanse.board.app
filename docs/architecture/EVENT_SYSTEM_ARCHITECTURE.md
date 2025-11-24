# Event System Architecture

## Übersicht

Das Event System ermöglicht es, Widget-Interaktionen (z.B. Klicks auf Karten-Marker, Chart-Punkte) auf Seiten-Ebene zu konfigurieren und darauf mit Actions (Navigation, Variable setzen, etc.) zu reagieren. Das System ist vollständig modellbasiert und typsicher.

## Architektur-Diagramm

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              PAGE LEVEL                                      │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    Page Event Configuration                         │    │
│  │  ┌──────────────────────────────────────────────────────────────┐  │    │
│  │  │  Event Rules:                                                 │  │    │
│  │  │  ┌────────────────────────────────────────────────────────┐  │  │    │
│  │  │  │ Rule 1: "Temperature Sensor Click"                     │  │  │    │
│  │  │  │   Event: widget:map:click_on_thing                     │  │  │    │
│  │  │  │   Conditions:                                          │  │  │    │
│  │  │  │     - payload.properties.type == "temp_sensor"         │  │  │    │
│  │  │  │   Actions:                                             │  │  │    │
│  │  │  │     - setVariable("selectedId", "${payload.id}")       │  │  │    │
│  │  │  │     - navigate("sensor-detail")                        │  │  │    │
│  │  │  └────────────────────────────────────────────────────────┘  │  │    │
│  │  │  ┌────────────────────────────────────────────────────────┐  │  │    │
│  │  │  │ Rule 2: "Critical Value Alert"                         │  │  │    │
│  │  │  │   Event: widget:chart:click_on_point                   │  │  │    │
│  │  │  │   Conditions:                                          │  │  │    │
│  │  │  │     - payload.y > 100                                  │  │  │    │
│  │  │  │   Actions:                                             │  │  │    │
│  │  │  │     - openModal("alert-widget")                        │  │  │    │
│  │  │  └────────────────────────────────────────────────────────┘  │  │    │
│  │  └──────────────────────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                    ▲                                         │
│                                    │                                         │
│                    ┌───────────────┴────────────────┐                       │
│                    │   Page Event Manager           │                       │
│                    │  - Evaluates Conditions        │                       │
│                    │  - Executes Actions            │                       │
│                    │  - Validates Rules             │                       │
│                    │  - Provides Autocomplete Data  │                       │
│                    └───────────┬────────────────────┘                       │
│                                │                                             │
│                    ┌───────────┴────────────────┐                           │
│                    │   Event Registry           │                           │
│                    │  - Stores Event Schemas    │                           │
│                    │  - Provides Introspection  │                           │
│                    │  - Validates Property Paths│                           │
│                    └───────────┬────────────────┘                           │
│                                │                                             │
│         ┌──────────────────────┼──────────────────────┐                     │
│         │                      │                      │                     │
│         ▼                      ▼                      ▼                     │
│  ┌────────────┐         ┌────────────┐         ┌────────────┐             │
│  │ Event Bus  │◄────────┤ Event Bus  │◄────────┤ Event Bus  │             │
│  │ (TinyEmit) │         │ (TinyEmit) │         │ (TinyEmit) │             │
│  └─────▲──────┘         └─────▲──────┘         └─────▲──────┘             │
│        │                      │                      │                      │
│   emit │ events          emit │ events          emit │ events              │
│        │                      │                      │                      │
│  ┌─────┴──────┐         ┌─────┴──────┐         ┌─────┴──────┐             │
│  │    Map     │         │   Chart    │         │   Table    │             │
│  │   Widget   │         │   Widget   │         │   Widget   │             │
│  └────────────┘         └────────────┘         └────────────┘             │
│        │                      │                      │                      │
│        │ registers events     │ registers events     │ registers events    │
│        │                      │                      │                      │
│        ▼                      ▼                      ▼                      │
│  ┌──────────────────────────────────────────────────────────────┐          │
│  │           Widget Event Definitions (Annotated)                │          │
│  │  ┌────────────────────┐  ┌────────────────────┐             │          │
│  │  │ MapWidgetEvents    │  │ ChartWidgetEvents  │  ...        │          │
│  │  │ @WidgetEvents([    │  │ @WidgetEvents([    │             │          │
│  │  │   {                │  │   {                │             │          │
│  │  │     type: "click_  │  │     type: "click_  │             │          │
│  │  │       on_thing",   │  │       on_point",   │             │          │
│  │  │     payload:       │  │     payload:       │             │          │
│  │  │       ThingClick   │  │       PointClick   │             │          │
│  │  │       Payload      │  │       Payload      │             │          │
│  │  │   }                │  │   }                │             │          │
│  │  │ ])                 │  │ ])                 │             │          │
│  │  └────────────────────┘  └────────────────────┘             │          │
│  └──────────────────────────────────────────────────────────────┘          │
│                                    │                                         │
│                                    ▼                                         │
│  ┌──────────────────────────────────────────────────────────────┐          │
│  │              Event Payload DTOs (Annotated)                   │          │
│  │  ┌─────────────────────────────────────────────────────┐     │          │
│  │  │ @ModelClass ThingClickPayload {                     │     │          │
│  │  │   @EventProperty({ description: "Thing ID" })       │     │          │
│  │  │   id: string;                                       │     │          │
│  │  │                                                      │     │          │
│  │  │   @EventProperty({ description: "Thing Name" })     │     │          │
│  │  │   name?: string;                                    │     │          │
│  │  │                                                      │     │          │
│  │  │   @EventProperty({                                  │     │          │
│  │  │     description: "Properties",                      │     │          │
│  │  │     suggestions: "dynamic"                          │     │          │
│  │  │   })                                                │     │          │
│  │  │   properties?: Record<string, any>;                │     │          │
│  │  │ }                                                    │     │          │
│  │  └─────────────────────────────────────────────────────┘     │          │
│  └──────────────────────────────────────────────────────────────┘          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Komponenten-Übersicht

### 1. Event Payload DTOs

**Zweck:** Definieren die Struktur der Event-Daten

**Lokation:** `packages/ui/vue/widget/*/src/events/payloads/`

**Beispiel:**
```typescript
@ModelClass({ type: 'http://eclipse.daanse.board.app.events#//ThingClickPayload' })
export class ThingClickPayload {
  @EventProperty({ description: 'Thing ID', required: true })
  @Attribute()
  id!: string;

  @EventProperty({ description: 'Thing Name' })
  @Attribute()
  name?: string;

  @EventProperty({
    description: 'Properties',
    suggestions: 'dynamic'
  })
  @Attribute()
  properties?: Record<string, any>;
}
```

**Features:**
- Typsicher durch TypeScript-Klassen
- Annotiert mit `@EventProperty` für Metadaten
- Generiert automatisch Schema für UI
- Unterstützt `suggestions` für Autocomplete

---

### 2. Widget Event Definitions

**Zweck:** Registriert verfügbare Events pro Widget-Typ

**Lokation:** `packages/ui/vue/widget/*/src/events/`

**Beispiel:**
```typescript
@WidgetEvents([
  {
    name: 'Thing Clicked',
    type: 'click_on_thing',
    description: 'Triggered when a Thing marker is clicked',
    payloadType: ThingClickPayload
  },
  {
    name: 'Datastream Clicked',
    type: 'click_on_datastream',
    description: 'Triggered when a Datastream is clicked',
    payloadType: DatastreamClickPayload
  }
])
export class MapWidgetEventDefinitions {}
```

**Features:**
- Deklarative Event-Definition
- Verknüpft Event-Typ mit Payload-Klasse
- Lesbar und dokumentiert

---

### 3. Event Registry

**Zweck:** Zentrale Registry für alle Event-Schemas mit Introspection

**Lokation:** `packages/lib/events/src/EventRegistry.ts`

**API:**
```typescript
interface EventRegistry {
  // Registrierung
  registerWidget(widgetType: string, widgetClass: any): void;

  // Abfragen
  getAllEventSchemas(): EventSchema[];
  getEventSchema(fullEventPath: string): EventSchema | undefined;
  getWidgetEvents(widgetType: string): EventSchema[];
  getEventProperties(fullEventPath: string): PropertySchema[];

  // Validierung
  validatePropertyPath(fullEventPath: string, propertyPath: string): boolean;
  getPropertyType(fullEventPath: string, propertyPath: string): string | undefined;

  // Autocomplete
  getSuggestions(fullEventPath: string, propertyPath: string): string[] | 'dynamic';
}
```

**Event Schema:**
```typescript
interface EventSchema {
  widgetType: string;           // "map"
  eventType: string;            // "click_on_thing"
  eventName: string;            // "Thing Clicked"
  description?: string;
  fullEventPath: string;        // "widget:map:click_on_thing"
  payloadSchema: PropertySchema[];
}

interface PropertySchema {
  name: string;                 // "id"
  type: string;                 // "string"
  description?: string;
  required: boolean;
  suggestions?: 'dynamic' | string[];
  path: string;                 // "payload.id"
}
```

---

### 4. Page Event Manager

**Zweck:** Verwaltet Event-Rules und führt sie aus

**Lokation:** `packages/lib/pagecontext/src/PageEventManager.ts`

**API:**
```typescript
interface PageEventManager {
  // Widget-Registrierung
  registerWidget(widgetId: string, widgetType: string, widgetClass: any): void;
  unregisterWidget(widgetId: string): void;

  // Event-Handling
  init(pageConfig: PageEventConfiguration): void;
  handleEvent(event: WidgetEvent): void;

  // UI-Support
  getAvailableEvents(): EventSchema[];
  getAvailableProperties(eventType: string): PropertySchema[];
  getSuggestionsForProperty(eventType: string, propertyPath: string): string[] | null;

  // Validierung
  validateRule(rule: EventRule): { valid: boolean; errors: string[] };
}
```

**Flow:**
```text
1. Widget emits event → Event Bus
2. Page Event Manager receives event
3. Find matching rules:
   - Filter by event type
   - Evaluate conditions (AND/OR logic)
   - Sort by priority
4. Execute actions for each matching rule:
   - setVariable
   - navigate
   - openModal
   - emitEvent
   - etc.
```

---

### 5. Event Rule Configuration

**Zweck:** Deklarative Konfiguration von Event-Reaktionen

**Struktur:**
```typescript
interface EventRule {
  id: string;
  name: string;
  enabled: boolean;
  eventType: string;              // "widget:map:click_on_thing"
  conditions: EventCondition[];
  conditionLogic?: 'AND' | 'OR';  // Default: AND
  actions: EventAction[];
  priority?: number;
}

interface EventCondition {
  propertyPath: string;           // "payload.properties.type"
  operator: ConditionOperator;    // "==", "!=", ">", "<", "contains", etc.
  value: any;
  valueType?: 'static' | 'variable' | 'expression';
}

interface EventAction {
  type: EventActionType;          // "setVariable", "navigate", "openModal", etc.
  config: any;
}
```

**Beispiel-Konfiguration:**
```json
{
  "rules": [
    {
      "id": "rule-1",
      "name": "Temperature Sensor → Detail Page",
      "enabled": true,
      "eventType": "widget:map:click_on_thing",
      "conditions": [
        {
          "propertyPath": "payload.properties.type",
          "operator": "==",
          "value": "temperature_sensor"
        }
      ],
      "actions": [
        {
          "type": "setVariable",
          "config": {
            "variableName": "selectedSensorId",
            "valueExpression": "${payload.id}"
          }
        },
        {
          "type": "navigate",
          "config": {
            "pageId": "sensor-detail",
            "passContext": true
          }
        }
      ]
    }
  ]
}
```

---

## Datenfluss

### Event Emission (Widget → Event Bus)

```typescript
// 1. Widget emits typed event
const payload = new ThingClickPayload();
payload.id = thing.iotId;
payload.name = thing.name;
payload.properties = thing.properties;

eventBus.emit('widget:map:click_on_thing', {
  type: 'widget:map:click_on_thing',
  widgetId: 'map-widget-1',
  payload: payload,
  timestamp: Date.now(),
  metadata: { rendererId: 'renderer-123' }
});
```

### Event Processing (Event Bus → Page Event Manager)

```typescript
// 2. Page Event Manager evaluates rules
handleEvent(event: WidgetEvent) {
  // Find matching rules
  const matchingRules = this.rules.filter(rule =>
    rule.enabled &&
    rule.eventType === event.type &&
    this.evaluateConditions(rule.conditions, event)
  );

  // Execute actions
  matchingRules.forEach(rule => {
    this.executeActions(rule.actions, event);
  });
}
```

### Condition Evaluation

```typescript
// 3. Evaluate condition against event payload
evaluateCondition(condition: EventCondition, event: WidgetEvent): boolean {
  // Get value from payload: "payload.properties.type" → event.payload.properties.type
  const eventValue = this.getNestedProperty(event, condition.propertyPath);

  // Compare based on operator
  switch (condition.operator) {
    case '==': return eventValue == condition.value;
    case '>': return Number(eventValue) > Number(condition.value);
    case 'contains': return String(eventValue).includes(String(condition.value));
    // ...
  }
}
```

### Action Execution

```typescript
// 4. Execute actions
executeSetVariable(action: SetVariableAction, event: WidgetEvent) {
  const variable = this.variableRepository.getVariable(action.config.variableName);

  // Evaluate template: "${payload.id}" → "sensor-123"
  const value = this.evaluateExpression(action.config.valueExpression, event);

  variable.value = value; // Triggers subscribers (other widgets update)
}

executeNavigate(action: NavigateAction, event: WidgetEvent) {
  if (action.config.passContext) {
    this.variableRepository.getVariable('_navigationContext').value = event.payload;
  }

  router.push(`/page/${action.config.pageId}`);
}
```

---

## Widget Integration

### Widget Registration bei Mount

```typescript
// MapsWidget.vue
import { MapWidgetEventDefinitions } from './events';

onMounted(() => {
  eventManager.registerWidget(widgetId, 'map', MapWidgetEventDefinitions);
});

onUnmounted(() => {
  eventManager.unregisterWidget(widgetId);
});
```

### Event Emission im Widget

```vue
<!-- OGCSTALayer.vue -->
<template>
  <l-marker @click="handleThingClick(thing, renderer)">
    <!-- ... -->
  </l-marker>
</template>

<script setup>
const handleThingClick = (thing: any, renderer: any) => {
  const payload = new ThingClickPayload();
  payload.id = thing.iotId;
  payload.name = thing.name;
  payload.properties = thing.properties;
  payload.location = thing.locations?.[0]?.location;
  payload.datastreams = thing.datastreams?.map(ds => ({
    id: ds.iotId,
    name: ds.name
  }));
  payload.rendererId = renderer.id;

  eventBus.emit('widget:map:click_on_thing', {
    type: 'widget:map:click_on_thing',
    widgetId: widgetId,
    payload: payload,
    timestamp: Date.now()
  });
};
</script>
```

---

## UI für Event-Rule-Konfiguration

### Event-Rule-Editor

```text
┌─────────────────────────────────────────────────────────────┐
│ Page Event Rules                                             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ ┌───────────────────────────────────────────────────────┐   │
│ │ Rule: "Temperature Sensor Click"          [✓] Enabled │   │
│ │                                                         │   │
│ │ Event Type:                                             │   │
│ │ ┌─────────────────────────────────────────────────┐   │   │
│ │ │ [🗺️] map: Thing Clicked                         │   │   │
│ │ └─────────────────────────────────────────────────┘   │   │
│ │                                                         │   │
│ │ Conditions: (⚫ AND ○ OR)                              │   │
│ │ ┌─────────────────────────────────────────────────┐   │   │
│ │ │ Property:     [payload.properties.type      ▼]  │   │   │
│ │ │ Operator:     [equals (==)                  ▼]  │   │   │
│ │ │ Value:        [temperature_sensor           ▼]  │   │   │
│ │ │                                               [×] │   │   │
│ │ └─────────────────────────────────────────────────┘   │   │
│ │ [+ Add Condition]                                     │   │
│ │                                                         │   │
│ │ Actions:                                                │   │
│ │ ┌─────────────────────────────────────────────────┐   │   │
│ │ │ 1. Set Variable                                  │   │   │
│ │ │    Variable: [selectedSensorId            ▼]    │   │   │
│ │ │    Value:    [${payload.id}               ]     │   │   │
│ │ │                                               [×] │   │   │
│ │ ├─────────────────────────────────────────────────┤   │   │
│ │ │ 2. Navigate to Page                             │   │   │
│ │ │    Page:     [sensor-detail               ▼]    │   │   │
│ │ │    □ Open in new tab                            │   │   │
│ │ │    ✓ Pass context                               │   │   │
│ │ │                                               [×] │   │   │
│ │ └─────────────────────────────────────────────────┘   │   │
│ │ [+ Add Action]                                        │   │
│ │                                                         │   │
│ │                                          [Delete Rule] │   │
│ └───────────────────────────────────────────────────────┘   │
│                                                               │
│ [+ Add Event Rule]                                           │
└─────────────────────────────────────────────────────────────┘
```

### Property-Path-Autocomplete mit Schema

```typescript
// UI zeigt verfügbare Properties basierend auf Event-Schema
const availableProperties = computed(() => {
  if (!rule.eventType) return [];

  return eventManager.getAvailableProperties(rule.eventType).map(prop => ({
    text: `${prop.path} (${prop.type})`,
    value: prop.path,
    description: prop.description,
    badge: prop.required ? 'required' : undefined
  }));
});

// Beispiel-Output:
[
  { text: "payload.id (string)", value: "payload.id", description: "Thing ID", badge: "required" },
  { text: "payload.name (string)", value: "payload.name", description: "Thing Name" },
  { text: "payload.properties (object)", value: "payload.properties", description: "Properties" },
  { text: "payload.location.coordinates (array)", value: "payload.location.coordinates" }
]
```

### Value-Suggestions mit Dynamic Loading

```typescript
// UI zeigt Suggestions für Property-Werte
const valueSuggestions = computed(() => {
  const suggestions = eventManager.getSuggestionsForProperty(
    rule.eventType,
    condition.propertyPath
  );

  if (suggestions === null) return []; // Keine Suggestions
  if (Array.isArray(suggestions)) return suggestions; // Statische Suggestions

  // Dynamic Suggestions - aus aktuellen Widget-Daten
  return getDynamicSuggestionsFromWidgets();
});

// Beispiel für "payload.properties.type":
// → ["temperature_sensor", "humidity_sensor", "pressure_sensor"]
```

---

## Validierung

### Compile-Zeit

- TypeScript validiert Payload-Typen
- IDE gibt Autocomplete für Properties
- Fehler bei falschen Property-Namen

### Runtime

```typescript
// Rule-Validierung vor Speichern
const validation = eventManager.validateRule(rule);

if (!validation.valid) {
  console.error('Invalid rule:', validation.errors);
  // ["Condition 0: Invalid property path 'payload.invalidProp' for event widget:map:click_on_thing"]
  // ["Condition 1: Operator '>' not compatible with type 'string'"]
}
```

### UI-Validierung

- Property-Path muss in Schema existieren
- Operator muss zu Property-Typ passen
- Pflicht-Felder müssen gesetzt sein
- Event-Typ muss für aktive Widgets verfügbar sein

---

## Erweiterbarkeit

### Neues Widget-Event hinzufügen

```typescript
// 1. Payload-DTO erstellen
@ModelClass({ type: 'http://eclipse.daanse.board.app.events#//LocationClickPayload' })
export class LocationClickPayload {
  @EventProperty({ description: 'Location ID', required: true })
  @Attribute() id!: string;

  @EventProperty({ description: 'GeoJSON geometry' })
  @Attribute() geometry?: any;
}

// 2. Widget-Event registrieren
@WidgetEvents([
  // ... existing events
  {
    name: 'Location Clicked',
    type: 'click_on_location',
    payloadType: LocationClickPayload
  }
])
export class MapWidgetEventDefinitions {}

// 3. Event emittieren
const handleLocationClick = (location: any) => {
  const payload = new LocationClickPayload();
  payload.id = location.iotId;
  payload.geometry = location.location;

  eventBus.emit('widget:map:click_on_location', {
    type: 'widget:map:click_on_location',
    widgetId: widgetId,
    payload: payload,
    timestamp: Date.now()
  });
};

// Fertig! Event ist automatisch in UI verfügbar
```

### Neue Action hinzufügen

```typescript
// 1. Action-Typ definieren
export enum EventActionType {
  // ... existing
  CALL_API = 'callApi',
}

export interface CallApiAction extends EventAction {
  type: EventActionType.CALL_API;
  config: {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: string; // Template: "${payload.id}"
    headers?: Record<string, string>;
  };
}

// 2. Action-Executor implementieren
private executeCallApi(action: CallApiAction, event: WidgetEvent) {
  const url = this.evaluateExpression(action.config.url, event);
  const body = action.config.body
    ? this.evaluateExpression(action.config.body, event)
    : undefined;

  fetch(url, {
    method: action.config.method,
    headers: action.config.headers,
    body: body
  });
}

// 3. In executeActions() hinzufügen
case EventActionType.CALL_API:
  this.executeCallApi(action as CallApiAction, event);
  break;
```

---

## Best Practices

### Widget-Entwickler

1. **Events semantisch benennen:** `click_on_thing` statt `thing_click`
2. **Payload-DTOs vollständig dokumentieren:** Alle Properties mit `@EventProperty` annotieren
3. **Suggestions angeben:** Wo sinnvoll, `suggestions: 'dynamic'` nutzen
4. **Events bei Mount registrieren:** `eventManager.registerWidget()` in `onMounted()`
5. **Events bei Unmount deregistrieren:** `eventManager.unregisterWidget()` in `onUnmounted()`

### Seiten-Konfiguration

1. **Sprechende Namen:** Rules beschreibend benennen
2. **Conditions minimal halten:** Nur notwendige Conditions
3. **Priorität nutzen:** Bei überlappenden Rules Priorität setzen
4. **Aktionen gruppieren:** Zusammenhängende Aktionen in einer Rule
5. **Validierung prüfen:** Vor Speichern Rule validieren

### Performance

1. **Conditions früh prüfen:** Event-Typ-Filter vor Condition-Evaluation
2. **Debouncing bei Actions:** Bei häufigen Events (z.B. Mouse-Move) debouncing nutzen
3. **Variable-Updates batchen:** Mehrere Variable-Sets in einer Action
4. **Rule-Anzahl begrenzen:** Nicht mehr als 20-30 Rules pro Seite

---

## Beispiel: Vollständiger Use Case

### Szenario

Sensor-Übersichts-Dashboard mit Karte. Bei Klick auf Sensor:
1. Variable `selectedSensorId` setzen
2. Detail-Widget aktualisiert sich automatisch (via Variable-Subscription)
3. Navigation zu Detail-Seite (optional)

### Konfiguration

```json
{
  "pageId": "sensor-overview",
  "eventRules": [
    {
      "id": "sensor-click-handler",
      "name": "Sensor Click → Show Details",
      "enabled": true,
      "eventType": "widget:map:click_on_thing",
      "conditions": [
        {
          "propertyPath": "payload.properties.category",
          "operator": "==",
          "value": "sensor"
        }
      ],
      "conditionLogic": "AND",
      "actions": [
        {
          "type": "setVariable",
          "config": {
            "variableName": "selectedSensorId",
            "valueExpression": "${payload.id}"
          }
        },
        {
          "type": "setVariable",
          "config": {
            "variableName": "selectedSensorName",
            "valueExpression": "${payload.name}"
          }
        },
        {
          "type": "emitEvent",
          "config": {
            "eventName": "sensor:selected",
            "payload": "${payload}"
          }
        }
      ],
      "priority": 10
    }
  ]
}
```

### Widget-Code

```typescript
// Map Widget
const handleThingClick = (thing: any) => {
  const payload = new ThingClickPayload();
  payload.id = thing.iotId;
  payload.name = thing.name;
  payload.properties = thing.properties;

  eventBus.emit('widget:map:click_on_thing', {
    type: 'widget:map:click_on_thing',
    widgetId: widgetId,
    payload: payload,
    timestamp: Date.now()
  });
};

// Detail Widget (reagiert auf Variable)
const selectedSensorId = computed(() => {
  return variableRepository.getVariable('selectedSensorId')?.value;
});

watch(selectedSensorId, async (newId) => {
  if (newId) {
    await loadSensorDetails(newId);
  }
});
```

---

## Zusammenfassung

Das Event-System bietet:

✅ **Typsicherheit** durch modellierte DTOs
✅ **Introspection** für UI-Autocomplete
✅ **Deklarative Konfiguration** statt Code
✅ **Zentrale Event-Verwaltung** auf Seiten-Ebene
✅ **Flexible Conditions** mit AND/OR-Logik
✅ **Erweiterbare Actions** (Variables, Navigation, Modals, etc.)
✅ **Validierung** zur Compile- und Runtime
✅ **Widget-Unabhängigkeit** durch standardisierte Events
✅ **No-Code-fähig** für Endbenutzer

Das System ermöglicht es, komplexe Interaktions-Flows ohne Code-Änderungen zu konfigurieren und ist gleichzeitig für Entwickler typsicher und wartbar.
