/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'
// import * as csv from '../src/classes/csv';

const sampleCsv = `"Month", "1958", "1959", "1960"
    "JAN",  340,  360,  417
    "FEB",  318,  342,  391
    "MAR",  362,  406,  419
    "APR",  348,  396,  461
    "MAY",  363,  420,  472
    "JUN",  435,  472,  535
    "JUL",  491,  548,  622
    "AUG",  505,  559,  606
    "SEP",  404,  463,  508
    "OCT",  359,  407,  461
    "NOV",  310,  362,  390
    "DEC",  337,  405,  432`

const test = helpers.csv.parse(sampleCsv)
console.log(test)

import assert from 'assert'
assert.strictEqual(1, 1, '1 should be equal to 1')
