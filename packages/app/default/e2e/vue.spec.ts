/**
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { test, expect } from '@playwright/test';
import {ScreenShotter} from "../../../../tools/test/screenshoter/screenshoter";



// See here how to get started:
// https://playwright.dev/docs/intro




test('Test1', async ({ page },testInfo) => {
  let screenShotter = new ScreenShotter(testInfo);
  await screenShotter.startStopWatch(page)
  await page.goto('/');

  await screenShotter.takeScreenshot(page,'my_first_Screenshot',false);
  await screenShotter.makeCuePoint(page,'my_firstCuePoint1')
  await screenShotter.makeCuePoint(page,'my_secCuePoint2')
  await screenShotter.makeCuePoint(page,'my_terCuePoint3')


  await screenShotter.generateJsonSummery(page);
  await expect(page.locator('#app_testable_h1')).toHaveText('You did it!');
})

