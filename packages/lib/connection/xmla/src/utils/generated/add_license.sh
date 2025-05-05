#!/bin/bash

# Define the header text
read -r -d '' HEADER << 'EOF'
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

EOF

# Target directory
TARGET_DIR="./xmla/definitions"

# Process each TypeScript file
for file in "$TARGET_DIR"/*.ts; do
  # Skip files that already have the header
  if grep -q "Copyright (c) 2025 Contributors to the Eclipse Foundation" "$file"; then
    echo "Skipping $file (already has header)"
    continue
  fi

  # Create a temporary file with the header and original content
  echo "$HEADER" > temp_file
  cat "$file" >> temp_file

  # Replace the original file
  mv temp_file "$file"
  echo "Added header to $file"
done
