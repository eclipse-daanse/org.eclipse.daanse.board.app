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

import { describe, it, expect } from 'vitest';
import { axisTicks, pickStep, rangeColor, THEME_ACCENT } from '../timelineAxis';

const HOUR = 3_600_000;
const DAY = 24 * HOUR;

describe('rangeColor', () => {
  it('falls back to the theme accent when nothing is set', () => {
    expect(rangeColor(undefined)).toBe(THEME_ACCENT);
    expect(rangeColor(null)).toBe(THEME_ACCENT);
    expect(rangeColor('')).toBe(THEME_ACCENT);
    expect(rangeColor('   ')).toBe(THEME_ACCENT);
  });

  it('keeps a colour that is set', () => {
    expect(rangeColor('#4FC3F7')).toBe('#4FC3F7');
    expect(rangeColor(' #0092d1 ')).toBe('#0092d1');
  });
});

describe('pickStep', () => {
  it('picks the smallest round step that keeps the count at the target', () => {
    expect(pickStep(24 * HOUR, 8)).toMatchObject({ unit: 'hour', count: 3 });
    expect(pickStep(24 * DAY, 8)).toMatchObject({ unit: 'week', count: 1 });
    expect(pickStep(24 * DAY, 16)).toMatchObject({ unit: 'day', count: 2 });
    expect(pickStep(60 * 60_000, 4)).toMatchObject({ unit: 'minute', count: 15 });
  });
});

describe('axisTicks', () => {
  it('puts ticks on round local times, not on fractions of the span', () => {
    const min = new Date(2026, 9, 13, 6, 48, 15).getTime();
    const max = new Date(2026, 9, 14, 7, 48, 15).getTime();
    const ticks = axisTicks(min, max, 10);
    expect(ticks.length).toBeGreaterThan(1);
    for (const tick of ticks) {
      const d = new Date(tick.ms);
      expect(d.getMinutes()).toBe(0);
      expect(d.getHours() % 3).toBe(0);
      expect(tick.position).toBeGreaterThanOrEqual(0);
      expect(tick.position).toBeLessThanOrEqual(100);
    }
  });

  it('names the day at midnight and the clock time between', () => {
    const min = new Date(2026, 9, 13, 18, 0).getTime();
    const max = new Date(2026, 9, 14, 6, 0).getTime();
    const ticks = axisTicks(min, max, 6);
    const midnight = ticks.find((tick) => new Date(tick.ms).getHours() === 0);
    expect(midnight?.kind).toBe('date');
    expect(ticks.filter((tick) => tick.kind === 'time').length).toBeGreaterThan(0);
  });

  it('keeps day ticks at midnight', () => {
    const min = new Date(2026, 9, 1, 12, 0).getTime();
    const max = new Date(2026, 9, 9, 12, 0).getTime();
    const ticks = axisTicks(min, max, 10);
    expect(ticks.every((tick) => tick.kind === 'date')).toBe(true);
    expect(ticks.every((tick) => new Date(tick.ms).getHours() === 0)).toBe(true);
  });

  it('gives nothing for an empty or reversed span', () => {
    expect(axisTicks(10, 10, 8)).toEqual([]);
    expect(axisTicks(10, 5, 8)).toEqual([]);
    expect(axisTicks(NaN, 5, 8)).toEqual([]);
  });
});
