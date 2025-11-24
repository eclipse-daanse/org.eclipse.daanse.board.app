#!/bin/bash
#######################################################################
# Copyright (c) 2025 Contributors to the Eclipse Foundation.
#
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
#
# SPDX-License-Identifier: EPL-2.0
#
# Contributors:
#   Smart City Jena
#######################################################################

# Restore all backups and re-apply optimization correctly

find packages -name "vite.config.ts.bak" | while read backup; do
  config="${backup%.bak}"
  echo "Restoring and re-optimizing: $config"

  # Restore from backup
  cp "$backup" "$config"

  # Apply optimization using Node.js for safer parsing
  node -e "
    const fs = require('fs');
    const file = '$config';
    let content = fs.readFileSync(file, 'utf8');

    // Add minify: false after 'build: {'
    if (!content.includes('minify:')) {
      content = content.replace(
        /build:\s*\{/,
        'build: {\\n    minify: false, // Deaktiviert Minifizierung für besseres Debugging'
      );
    }

    // Replace external array with function
    if (content.includes('external:')) {
      content = content.replace(
        /external:\s*\[[^\]]*\],?/s,
        \`external: (id) => {
        // Alle node_modules und Workspace-Packages als external
        // Nur relative und absolute Pfade (eigener Code) werden gebundled
        return !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\\\\0')
      },\`
      );
    }

    fs.writeFileSync(file, content);
  "

  echo "  ✅ Fixed"
done

echo ""
echo "🎉 All configs fixed!"
