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

# Script to optimize all vite.config.ts files
# Adds minify: false and external dependencies handling

find packages -name "vite.config.ts" | while read config; do
  echo "Processing: $config"

  # Check if file already has minify: false
  if grep -q "minify:" "$config"; then
    echo "  ⏭️  Already has minify config, skipping"
    continue
  fi

  # Check if file has build.lib section (library builds)
  if ! grep -q "build:" "$config"; then
    echo "  ⏭️  No build config, skipping"
    continue
  fi

  # Create backup
  cp "$config" "$config.bak"

  # Add minify: false after "build: {" and add external function if rollupOptions exists
  if grep -q "rollupOptions:" "$config"; then
    # Has rollupOptions - replace external array with function
    awk '
      /build: \{/ {
        print $0
        print "    minify: false, // Deaktiviert Minifizierung für besseres Debugging"
        next
      }
      /external: \[/ {
        # Start of external array - replace with function
        print "      external: (id) => {"
        print "        // Alle node_modules und Workspace-Packages als external"
        print "        // Nur relative und absolute Pfade (eigener Code) werden gebundled"
        print "        return !id.startsWith(\".\") && !id.startsWith(\"/\") && !id.startsWith(\"\\0\")"
        print "      },"
        in_external = 1
        next
      }
      in_external && /\],?/ {
        # End of external array - skip closing bracket
        in_external = 0
        next
      }
      !in_external {
        print $0
      }
    ' "$config" > "$config.tmp" && mv "$config.tmp" "$config"
  else
    # No rollupOptions - just add minify: false
    awk '
      /build: \{/ {
        print $0
        print "    minify: false, // Deaktiviert Minifizierung für besseres Debugging"
        next
      }
      { print $0 }
    ' "$config" > "$config.tmp" && mv "$config.tmp" "$config"
  fi

  echo "  ✅ Optimized"
done

echo ""
echo "🎉 Done! All vite.config.ts files have been optimized."
echo "Backups saved as *.bak files."
