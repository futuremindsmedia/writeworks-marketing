import os
import re

# List of files to update
files_to_update = [
    "app/about/page.tsx",
    "app/solutions/field-events-marketing/page.tsx",
    "app/solutions/brand-marketing/page.tsx",
    "app/solutions/pr-communications/page.tsx",
    "app/platform/features/brand-management/page.tsx",
    "app/platform/features/ai-text-actions/page.tsx",
    "app/platform/features/analytics/page.tsx",
    "app/platform/features/security-compliance/page.tsx",
    "app/platform/features/workflow-collaboration/page.tsx",
    "app/solutions/technology/page.tsx",
    "app/solutions/content-marketing/page.tsx",
    "app/solutions/performance-marketing/page.tsx",
    "app/solutions/product-marketing/page.tsx",
    "app/platform/features/content-editor/page.tsx",
    "app/platform/features/ai-agents/page.tsx",
    "app/platform/features/role-based-access/page.tsx",
    "app/platform/features/content-templates/page.tsx",
    "app/platform/features/content-calendar/page.tsx",
    "app/platform/features/approval-workflows/page.tsx",
    "app/platform/features/knowledge-base/page.tsx",
]

# Patterns to replace
patterns = [
    # Pattern 1: text-3xl sm:text-4xl md:text-5xl -> text-3xl md:text-4xl
    (r'text-3xl sm:text-4xl md:text-5xl', 'text-3xl md:text-4xl'),
    # Pattern 2: text-4xl md:text-6xl -> text-3xl md:text-4xl
    (r'text-4xl md:text-6xl', 'text-3xl md:text-4xl'),
    # Pattern 3: text-3xl sm:text-4xl md:text-6xl -> text-3xl md:text-4xl
    (r'text-3xl sm:text-4xl md:text-6xl', 'text-3xl md:text-4xl'),
]

updated_count = 0
files_updated = []

for file_path in files_to_update:
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all patterns
        for pattern, replacement in patterns:
            content = re.sub(pattern, replacement, content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            updated_count += 1
            files_updated.append(file_path)
            print(f"✓ Updated: {file_path}")
        else:
            print(f"- No changes needed: {file_path}")
            
    except FileNotFoundError:
        print(f"✗ File not found: {file_path}")
    except Exception as e:
        print(f"✗ Error processing {file_path}: {str(e)}")

print(f"\n{'='*60}")
print(f"Summary: Updated {updated_count} out of {len(files_to_update)} files")
print(f"{'='*60}")

if files_updated:
    print("\nFiles updated:")
    for file in files_updated:
        print(f"  - {file}")
