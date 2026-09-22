# Design system i2c - zasady dla Claude Code

Ten folder to obowiązujący system identyfikacji i2c Mikołaj Szymański. Każdy interfejs w tym projekcie (strona, aplikacja, e-mail, obrazek OG) budujesz z niego.

## Zanim napiszesz jakikolwiek UI

1. Przeczytaj `design-system/README.md` (brand book: logo, kolor, typografia, ton, układ).
2. Użyj wzorca z `design-system/examples/<Komponent>.html`, jeśli komponent już istnieje (Button, IconButton, NavPills, Tabs, DeltaChip, StatCard, AskBar, Input, BrandHero, Logo).

## Twarde zasady

- Style: dołącz `design-system/tokens.css`, `design-system/i2c.css`, `design-system/i2c.js`. Kolory, odstępy, promienie i cienie tylko przez zmienne CSS z `tokens.css` (`var(--ink)`, `var(--space-5)`, `var(--radius-lg)`). Żadnych kolorów hex wpisanych na sztywno poza tymi plikami.
- Font: wyłącznie Mulish (`var(--font-sans)`). Nie dodawaj innych fontów.
- Logo: nigdy nie składaj „i2c” ani „Mikołaj Szymański” tekstem. Wstawiaj `I2C.mark()`, `I2C.lockup()`, `I2C.app("<nazwa>")` albo pliki SVG z `design-system/assets/Logos`. Nie zmieniaj proporcji, nie barw znaku akcentem.
- Aplikacja: na `<html>` ustaw `data-app="<nazwa>"` (np. `checker`, `know-how`). Nowa aplikacja bez przypisanego akcentu działa w wersji mono. Przypisanie nowego koloru to decyzja właściciela - zapytaj, zamiast wymyślać.
- Dwa tryby: strona marki (i2c.pl) jest czarno-biała, kanciasta (`radius-0`), z motywem rozbitego znaku. Aplikacje: tło `canvas`, karty `surface`, jeden akcent aplikacji. Nie mieszaj trybów.
- Akcent to zawsze wypełnienie z czarnym tekstem (`on-accent`), nigdy kolor tekstu.
- Myślnik w treściach to łącznik „-”, nigdy pauza (długa kreska). Teksty po polsku, bez emoji.
- Kontrast: tekst min. 4,5:1 w obu motywach, fokus 2px `var(--focus)` z odstępem 2px.
- Brakuje komponentu albo tokenu? Zbuduj go z istniejących tokenów w stylu `examples/` i napisz w odpowiedzi, co dodałeś, żeby można to było dopisać do design systemu.

## Mapa plików

- `README.md` - brand book
- `tokens.json` - źródło tokenów; `tokens.css` - te same tokeny jako zmienne CSS i klasy `.i2c-t-*`
- `i2c.css` - komponenty (klasy `i2c-*`); `i2c.js` - logo jako SVG (`window.I2C`); `i2c.d.ts` - opis API
- `examples/` - wzorcowy HTML każdego komponentu
- `assets/Logos`, `assets/AppIcons`, `assets/Web` (favicony, OG), `assets/Motif`
