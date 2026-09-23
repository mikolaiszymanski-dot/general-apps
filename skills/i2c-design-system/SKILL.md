---
name: i2c-design-system
description: Design system marki i2c Mikołaj Szymański (i2c.pl, i2c checker, i2c know-how). Używaj przy każdym interfejsie, stronie, e-mailu, grafice i obrazku OG dla i2c.
---

# Design system i2c

Obowiązujący system identyfikacji i2c Mikołaj Szymański: marka główna (strona i2c.pl, wizytówki, dokumenty) i rodzina aplikacji „i2c + nazwa” (i2c checker, i2c know-how). Każdy interfejs dla i2c budujesz z plików tego skilla.

## Zanim napiszesz UI

1. Przeczytaj `INSTRUKCJA-DLA-CLAUDE.md` (twarde zasady) i `README.md` (brand book).
2. Jeśli komponent już istnieje, weź wzorzec z `examples/<Komponent>.html`.

## Podpięcie w projekcie

- Skopiuj do projektu `tokens.css`, `i2c.css`, `i2c.js` oraz potrzebne pliki z `assets/` (logo, favicony, obrazki OG).
- `i2c.css` ładuje Mulish z Google Fonts. Na publicznej stronie lepiej trzymać Mulish u siebie (`@fontsource-variable/mulish`, licencja OFL) i usunąć ten `@import` z kopii w projekcie - odwiedzający nie wysyłają wtedy zapytań do Google.
- Aplikacja: `data-app="<nazwa>"` na `<html>`. Strona marki: czarno-biała, `radius-0`, motyw rozbitego znaku.

## Źródło

Wzorcowa kopia jest w repozytorium `mikolaiszymanski-dot/general-apps`, w folderze `design-system/`. Ten skill jest jej paczką: po zmianie design systemu zbuduj go ponownie skryptem `scripts/package-design-system-skill.sh` i wgraj jeszcze raz.
