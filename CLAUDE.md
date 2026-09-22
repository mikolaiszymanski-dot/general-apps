## Design system

Interfejs budujemy wyłącznie według design systemu i2c z folderu `design-system/`.
@design-system/INSTRUKCJA-DLA-CLAUDE.md

## Strona i2c.pl

Strona jest w `docs/`, bo GitHub Pages publikuje tylko ten folder. Pliki design systemu, których używa, są kopiowane do `docs/ds/`: po każdej zmianie w `design-system/` uruchom `scripts/sync-design-system.sh` i zacommituj wynik. Nie edytuj `docs/ds/` ręcznie.
