#!/usr/bin/env bash
# Build dist/i2c-design-system.zip: the design system as a Claude skill, so every chat can use it.
# The zip holds the skill folder at its root: i2c-design-system/SKILL.md plus the design-system files.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
name="i2c-design-system"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

mkdir -p "$work/$name"
cp -R "$root/design-system/." "$work/$name/"
cp "$root/skills/$name/SKILL.md" "$work/$name/SKILL.md"

mkdir -p "$root/dist"
rm -f "$root/dist/$name.zip"
(cd "$work" && python3 -m zipfile -c "$root/dist/$name.zip" "$name")
echo "Built dist/$name.zip"
