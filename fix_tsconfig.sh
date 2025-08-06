#!/bin/bash

echo "Fixing tsconfig.json files..."

# First, restore files from git if they were corrupted
git checkout -- packages/lib/annotations/tsconfig.json packages/ui/vue/widget/map/tsconfig.json packages/lib/connection/base/tsconfig.json 2>/dev/null || true

# Find all tsconfig.json files that need to be updated
find . -name "tsconfig.json" -type f -not -path "./node_modules/*" | while read file; do
  # Check if file has compilerOptions and doesn't have emitDecoratorMetadata
  if grep -q '"compilerOptions"' "$file" && ! grep -q '"emitDecoratorMetadata"' "$file"; then
    echo "Processing: $file"
    
    # Create a temporary file for the new content
    temp_file=$(mktemp)
    
    # Use awk to properly add the settings
    awk '
    BEGIN { in_compiler_options = 0; added_decorators = 0; }
    /^[[:space:]]*"compilerOptions"[[:space:]]*:[[:space:]]*{/ {
      in_compiler_options = 1;
      print $0;
      next;
    }
    in_compiler_options && /^[[:space:]]*"target"[[:space:]]*:/ {
      print $0;
      if (!added_decorators) {
        if ($0 ~ /,$/) {
          print "    \"experimentalDecorators\": true,";
          print "    \"emitDecoratorMetadata\": true,";
        } else {
          print "    \"experimentalDecorators\": true,";
          print "    \"emitDecoratorMetadata\": true";
        }
        added_decorators = 1;
      }
      next;
    }
    in_compiler_options && /^[[:space:]]*}/ && added_decorators == 0 {
      print "    \"experimentalDecorators\": true,";
      print "    \"emitDecoratorMetadata\": true";
      added_decorators = 1;
      in_compiler_options = 0;
    }
    in_compiler_options && /^[[:space:]]*}/ {
      in_compiler_options = 0;
    }
    { print $0; }
    ' "$file" > "$temp_file"
    
    # Check if the new file is valid JSON
    if python3 -m json.tool "$temp_file" > /dev/null 2>&1; then
      mv "$temp_file" "$file"
      echo "  - Successfully updated"
    else
      echo "  - Failed to create valid JSON, skipping"
      rm "$temp_file"
    fi
  fi
done

echo "Done!"