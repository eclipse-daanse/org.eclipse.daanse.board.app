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

import XmlaWsdl from './xmla.wsdl?raw'
import eng_xsd from "./eng.xsd?raw"
import eng2_2_xsd from "./eng2_2.xsd?raw"
import eng2_xsd from "./eng2.xsd?raw"
import eng100_100_xsd from "./eng100_100.xsd?raw"
import eng100_xsd from "./eng100.xsd?raw"
import eng200_200_xsd from "./eng200_200.xsd?raw"
import eng200_xsd from "./eng200.xsd?raw"
import eng300_300_xsd from "./eng300_300.xsd?raw"
import eng300_xsd from "./eng300.xsd?raw"
import eng400_xsd from "./eng400.xsd?raw"
import eng600_xsd from "./eng600.xsd?raw"
import eng800_xsd from "./eng800.xsd?raw"
import ext_xsd from "./ext.xsd?raw"
import msxmla_xsd from "./msxmla.xsd?raw"
import xmla_ds_xsd from "./xmla-ds.xsd?raw"
import xmla_e_xsd from "./xmla-e.xsd?raw"
import xmla_m_xsd from "./xmla-m.xsd?raw"
import xmla_x_xsd from "./xmla-x.xsd?raw"
import xmla_rs_xsd from "./xmla-rs.xsd?raw"
import xmla_xsd from "./xmla.xsd?raw"

export default {
    'xmla.wsdl': XmlaWsdl,
    'eng.xsd': eng_xsd,
    'eng2_2.xsd': eng2_2_xsd,
    'eng2.xsd': eng2_xsd,
    'eng100_100.xsd': eng100_100_xsd,
    'eng100.xsd': eng100_xsd,
    'eng200_200.xsd': eng200_200_xsd,
    'eng200.xsd': eng200_xsd,
    'eng300_300.xsd': eng300_300_xsd,
    'eng300.xsd': eng300_xsd,
    'eng400.xsd': eng400_xsd,
    'eng600.xsd': eng600_xsd,
    'eng800.xsd': eng800_xsd,
    'ext.xsd': ext_xsd,
    'msxmla.xsd': msxmla_xsd,
    'xmla-ds.xsd': xmla_ds_xsd,
    'xmla-e.xsd': xmla_e_xsd,
    'xmla-m.xsd': xmla_m_xsd,
    'xmla-x.xsd': xmla_x_xsd,
    'xmla-rs.xsd': xmla_rs_xsd,
    'xmla.xsd': xmla_xsd,
    // 'xmla.xsd': require('./xmla.xsd'),
    // 'xmla-x.xsd': require('./xmla-x.xsd'),
    // 'xmla-rs.xsd': require('./xmla-rs.xsd'),
} as Record<string, string>
