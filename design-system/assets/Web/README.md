Podstawowe zasoby webowe dla i2c.pl i aplikacji.

- **Favicon:** `favicon-<app>.svg` (wektor, preferowany) i `favicon-<app>-32.png` (zapas dla starszych przeglądarek). Znak zajmuje 78% szerokości kafla, promień 12/64.
- **Apple touch icon:** `apple-touch-icon-<app>-180.png`, kwadrat bez zaokrągleń (iOS zaokrągla sam), znak na 66% szerokości.
- **Obrazek do udostępnień (Open Graph):** `og-<app>-1200x630.png` plus źródło `.svg`. i2c.pl: czarno-biały, motyw rozbitego znaku i logo główne. Aplikacje: płótno `canvas`, lockup aplikacji, dwuwierszowy nagłówek (`h1` + `h1-strong`) i panel w kolorze aplikacji z cienkimi słupkami.
- Nagłówki na obrazkach aplikacji („Mniej szumu. Więcej konkretu.”, „Wiedza, pod ręką.”) to tekst zastępczy. Podmień na własny claim w pliku `.svg`, zachowując układ.

Wstawienie w `<head>` (przykład dla i2c checker):

```html
<link rel="icon" href="/favicon-i2c-checker.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-i2c-checker-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon-i2c-checker-180.png">
<meta property="og:image" content="https://i2c.pl/og-i2c-checker-1200x630.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="theme-color" content="#edeef0">
```
