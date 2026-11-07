/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 * ********************************************************************/

/*
 * The axis under the timeline and the colour of the selected range.
 *
 * Kept apart from the component so both can be tested without mounting it.
 */

/** The colour used when the settings name none: whatever the theme calls its accent. */
export const THEME_ACCENT = 'var(--color-accent)';

/**
 * The colour of the selected range.
 *
 * Only the range follows the setting. The rail and the handles take their
 * colours from the theme, so a light setting cannot turn the rail white on
 * a dark board.
 */
export function rangeColor(setting: string | null | undefined): string {
  const value = (setting ?? '').trim();
  return value === '' ? THEME_ACCENT : value;
}

export type TickUnit = 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';

/**
 * What a tick label shows. 'time' is a clock time, 'date' a day,
 * 'month' a month and 'year' a year.
 */
export type TickKind = 'time' | 'date' | 'month' | 'year';

export interface AxisTick {
  ms: number;
  /** Position on the axis, 0 to 100. */
  position: number;
  kind: TickKind;
}

interface Step {
  unit: TickUnit;
  count: number;
  /** Approximate length, only used to pick the step. */
  approxMs: number;
}

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const STEPS: Step[] = [
  ...[1, 5, 10, 15, 30].map((count) => ({ unit: 'minute' as const, count, approxMs: count * MINUTE })),
  ...[1, 2, 3, 6, 12].map((count) => ({ unit: 'hour' as const, count, approxMs: count * HOUR })),
  ...[1, 2].map((count) => ({ unit: 'day' as const, count, approxMs: count * DAY })),
  { unit: 'week', count: 1, approxMs: 7 * DAY },
  ...[1, 3, 6].map((count) => ({ unit: 'month' as const, count, approxMs: count * 30 * DAY })),
  ...[1, 2, 5, 10, 25, 50, 100].map((count) => ({ unit: 'year' as const, count, approxMs: count * 365 * DAY })),
];

/** The smallest round step that keeps the number of ticks at or below the target. */
export function pickStep(spanMs: number, targetCount: number): Step {
  const target = Math.max(1, Math.floor(targetCount));
  return STEPS.find((step) => spanMs / step.approxMs <= target) ?? STEPS[STEPS.length - 1];
}

/** The first boundary of the step at or after the given time, in local time. */
function firstBoundary(ms: number, step: Step): Date {
  const d = new Date(ms);
  d.setSeconds(0, 0);
  switch (step.unit) {
    case 'minute':
      d.setMinutes(Math.floor(d.getMinutes() / step.count) * step.count);
      break;
    case 'hour':
      d.setMinutes(0);
      d.setHours(Math.floor(d.getHours() / step.count) * step.count);
      break;
    case 'day':
      d.setHours(0, 0);
      break;
    case 'week':
      d.setHours(0, 0);
      // Weeks start on Monday
      d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
      break;
    case 'month':
      d.setHours(0, 0);
      d.setDate(1);
      d.setMonth(Math.floor(d.getMonth() / step.count) * step.count);
      break;
    case 'year':
      d.setHours(0, 0);
      d.setMonth(0, 1);
      d.setFullYear(Math.floor(d.getFullYear() / step.count) * step.count);
      break;
  }
  while (d.getTime() < ms) advance(d, step);
  return d;
}

/** Moves a date on by one step, along the calendar so that days stay at midnight. */
function advance(d: Date, step: Step): void {
  switch (step.unit) {
    case 'minute':
      d.setMinutes(d.getMinutes() + step.count);
      break;
    case 'hour':
      d.setHours(d.getHours() + step.count);
      break;
    case 'day':
      d.setDate(d.getDate() + step.count);
      break;
    case 'week':
      d.setDate(d.getDate() + 7 * step.count);
      break;
    case 'month':
      d.setMonth(d.getMonth() + step.count);
      break;
    case 'year':
      d.setFullYear(d.getFullYear() + step.count);
      break;
  }
}

function kindOf(d: Date, step: Step): TickKind {
  if (step.unit === 'year') return 'year';
  if (step.unit === 'month') return d.getMonth() === 0 ? 'year' : 'month';
  if (step.unit === 'day' || step.unit === 'week') return 'date';
  // Clock ticks name the day where a new one starts
  return d.getHours() === 0 && d.getMinutes() === 0 ? 'date' : 'time';
}

/**
 * Ticks at round times between min and max.
 *
 * A step of 3 h gives 00:00, 03:00, 06:00 and so on, not min plus an
 * eighth of the span; the ends of the axis carry no tick unless they fall
 * on a boundary.
 */
export function axisTicks(minMs: number, maxMs: number, targetCount: number): AxisTick[] {
  const span = maxMs - minMs;
  if (!Number.isFinite(span) || span <= 0) return [];
  const step = pickStep(span, targetCount);
  const ticks: AxisTick[] = [];
  const d = firstBoundary(minMs, step);
  // The guard only stops a runaway loop; the step already limits the count
  for (let guard = 0; d.getTime() <= maxMs && guard < 500; guard++) {
    ticks.push({
      ms: d.getTime(),
      position: ((d.getTime() - minMs) / span) * 100,
      kind: kindOf(d, step),
    });
    advance(d, step);
  }
  return ticks;
}

/** Date format options for each kind of tick label. */
export const TICK_FORMAT: Record<TickKind, Intl.DateTimeFormatOptions> = {
  time: { hour: '2-digit', minute: '2-digit' },
  date: { day: '2-digit', month: '2-digit' },
  month: { month: 'short' },
  year: { year: 'numeric' },
};
