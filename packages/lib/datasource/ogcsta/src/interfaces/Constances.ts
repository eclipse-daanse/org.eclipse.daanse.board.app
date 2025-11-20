/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/
const FILTER:string = 'EFilter'
const FILTERRESET:string = 'EFilterReset'
const HISTORY_FILTER:string = 'EHistoryFilter'
const NOACTION:string = 'ENoAction'
const MQTT_UNSUBSCRIBE_ALL:string = 'EMqttUnsubscribeAll'
const UPDATE_MQTT_SUBSCRIPTIONS:string = 'EUpdateMqttSubscriptions'

// History time filter types
export const TIME_FILTERS = {
  LAST_HOUR: 'PT1H',
  LAST_DAY: 'P1D',
  LAST_WEEK: 'P7D',
  LAST_MONTH: 'P1M',
  LAST_YEAR: 'P1Y'
} as const;

export type TimeFilterType = typeof TIME_FILTERS[keyof typeof TIME_FILTERS];

// Helper function to generate ISO date strings for common time ranges
export const getTimeRangeFilter = (range: TimeFilterType) => {
  const now = new Date();
  let start: Date;

  switch (range) {
    case TIME_FILTERS.LAST_HOUR:
      start = new Date(now.getTime() - 60 * 60 * 1000);
      break;
    case TIME_FILTERS.LAST_DAY:
      start = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      break;
    case TIME_FILTERS.LAST_WEEK:
      start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    case TIME_FILTERS.LAST_MONTH:
      start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    case TIME_FILTERS.LAST_YEAR:
      start = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      break;
    default:
      start = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  }

  return {
    start: start.toISOString(),
    end: now.toISOString()
  };
};


export {
  FILTER,
  FILTERRESET,
  HISTORY_FILTER,
  NOACTION,
  MQTT_UNSUBSCRIBE_ALL,
  UPDATE_MQTT_SUBSCRIPTIONS
}
