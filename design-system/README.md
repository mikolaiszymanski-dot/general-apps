System identyfikacji działalności i2c Mikołaj Szymański. Obejmuje markę główną (strona i2c.pl, wizytówki, dokumenty firmowe) oraz rodzinę aplikacji nazywanych „i2c + nazwa”, np. i2c checker i i2c know-how. Marka główna jest czarno-biała i kanciasta. Aplikacje dziedziczą z niej logo, font i czerń, a dokładają jasne płótno, zaokrąglone karty i jeden kolor akcentu na aplikację.

## Architektura marki

- **Marka główna: i2c Mikołaj Szymański.** Strona i2c.pl, wizytówki, stopki dokumentów, faktury. Logo główne (`i2c-lockup-*`), tło `paper`, tekst `ink`, promienie `radius-0`, motyw rozbitego znaku.
- **Aplikacje: i2c + nazwa.** Każde narzędzie budowane dla i2c (np. strona zrobiona w Claude Code) dostaje lockup aplikacji: znak i2c i nazwę aplikacji w Mulish 700, małymi literami. Pliki `i2c-checker-*` i `i2c-know-how-*` pokazują wzór; kolejne aplikacje buduj tak samo przez `I2C.app("nazwa")`.
- Nazwa aplikacji to jedno słowo albo słowa z łącznikiem, małymi literami: „checker”, „know-how”. W tekście ciągłym pisz „i2c checker”, nigdy „I2C Checker” ani „i2c-checker”.
- W aplikacji logo główne z nazwiskiem pojawia się tylko w stopce lub na ekranie „O aplikacji”. W pasku górnym stoi lockup aplikacji.

## Logo

- Logo zostało odzyskane jako wektor z pliku drukarskiego wizytówek (PRINT_Businesscards_90x50mm, 19.12.2019). Znak i podpis to oryginalne krzywe: nie składaj podpisu „Mikołaj Szymański” fontem, wstawiaj plik lub `I2C.lockup()`.
- Pliki (grupa Logos): `i2c-lockup-black.svg`, `i2c-lockup-white.svg` (logo główne), `i2c-mark-black.svg`, `i2c-mark-white.svg` (sam znak), `i2c-checker-*.svg`, `i2c-know-how-*.svg` (lockupy aplikacji, nazwa zamieniona na krzywe), `i2c-lockup-print-141111.svg` (czerń z pliku drukarskiego, tylko do druku).
- Kolory logo: `ink` na jasnym tle, `paper` na ciemnym. Na akcencie aplikacji zawsze czarne (`on-accent`). Znaku nie barwi się akcentem.
- Pole ochronne: z każdej strony co najmniej średnica kropki nad „i” (ok. 22% wysokości znaku). Minimalna wysokość znaku 16px na ekranie i 6 mm w druku; logo główne min. 24px wysokości.
- Lockup aplikacji: odstęp znak-nazwa to 39% wysokości znaku, wysokość liter nazwy to 55% wysokości znaku, linia bazowa nazwy na linii dolnej krawędzi znaku. Tak samo jak podpis w logo głównym stoi obok znaku.
- Ikona aplikacji (grupa AppIcons): znak na kwadracie z promieniem 22% boku. i2c: biały znak na czarnym; aplikacje: czarny znak na akcencie aplikacji.

## Dwa tryby: marka i aplikacja

| | Marka (i2c.pl, druk) | Aplikacja (i2c checker, know-how, …) |
|---|---|---|
| Tło | `paper` (czysta biel lub czysta czerń) | `canvas`, na nim karty `surface` |
| Kolor | tylko `ink` i `paper`; opcjonalnie `accent-i2c` w jednym miejscu | neutralne + jeden akcent aplikacji |
| Promienie | `radius-0` | `radius-sm` do `radius-lg` |
| Typografia | `display` (Mulish 900), `contact` | `h1` + `h1-strong`, `metric`, `body`, `label` |
| Grafika | motyw rozbitego znaku | wykresy z cienkich słupków, bez ilustracji |

Aplikacja nie powinna udawać strony marki, a strona marki nie używa kart ani pastelowych kolorów aplikacji. Wspólne są: logo, Mulish, czerń `ink` jako kolor aktywny i fokus.

## Kolor

- Tekst: `ink` dla treści głównej, `ink-2` dla akapitów, `muted` dla etykiet, podpisów i osi. Każda z tych par ma co najmniej 4,5:1 na `paper`, `canvas`, `surface` i `surface-raised` w obu motywach.
- `faint` służy tylko do nieaktywnych słupków i siatki, nigdy do tekstu.
- Aktywny element (pigułka nawigacji, przycisk primary, command bar) to `inverse` z tekstem `on-inverse`. W motywie ciemnym odwraca się na biały.
- **Jeden akcent na aplikację.** Akcent ustawia atrybut `data-app` na `<html>`: `data-app="checker"` daje `accent-checker`, `data-app="know-how"` daje `accent-knowhow`. Bez `data-app` akcentem jest czerń (`inverse`), czyli aplikacja w wersji mono.
- Gdzie akcent: ikona aplikacji, główny CTA (`i2c-btn--accent`), chip wzrostu, jeden wyróżniony słupek na wykresie, przycisk wysyłki w AskBar, zaznaczenie w liście. Duże tła (hero strony aplikacji, pusty stan) w wersji `accent-*-soft`.
- Akcent to zawsze wypełnienie z tekstem `on-accent` (czarnym). Nigdy nie piszemy tekstu kolorem akcentu na jasnym tle: pastele mają tam 1,4-1,7:1.
- Akcent zajmuje mniej więcej jedną dziesiątą widoku. Reszta to neutralne `canvas`, `surface`, `line` i `ink`.
- Stany (`positive`, `negative`) są niezależne od akcentu i zawsze idą w parze ze znakiem „+”/„-” lub ikoną.
- Rezerwowe akcenty `accent-spare-1` (morela) i `accent-spare-2` (liliowy) czekają na kolejne aplikacje. Przypisując je, zmień nazwę tokenu na nazwę aplikacji i dopisz selektor `[data-app="…"]` w bundle.css.

### Do decyzji: kierunek kolorystyczny aplikacji i kolor dla i2c.pl

Karta PaletteOptions pokazuje trzy kierunki. W tokenach jest obecnie kierunek A.

- **A Pastel:** mięta, błękit, morela, liliowy z czarnym tekstem. Najbliżej referencji Ledgerix, najspokojniejszy.
- **B Sygnał:** limonka `#c6ff3d`, cyjan `#3de0ff`, pomarańcz `#ff7a1a`, róż `#ff66c4` z czarnym tekstem. Mocniej odcina się od czarno-białej marki; dobrze wygląda też na i2c.pl i w social media.
- **C Głębia:** butelkowa zieleń `#0f5b3a`, kobalt `#1f3fd6`, rdza `#b3401b`, śliwka `#6a2c9e` z białym tekstem. Bardziej premium, ale w motywie ciemnym wymaga jaśniejszych wariantów.
- `accent-i2c` (pomarańczowy sygnał) to propozycja dla strony głównej: czarno-biała strona z jednym kolorowym punktem (kropka statusu, jeden CTA, podkreślenie linku w hover). Jeśli strona ma zostać czysto czarno-biała, token zostaje nieużywany.

## Typografia

- Jedyna rodzina to **Mulish** (Google Fonts, licencja OFL), zmienna 200-1000. To ten sam krój, którym złożono podpis w logo: „Mikołaj” w 400 i „Szymański” w 700. Ładuj z Google Fonts (import jest na początku bundle.css) albo self-hostuj z `@fontsource-variable/mulish`.
- Rodzina w CSS: `var(--font-sans)`.
- Marka: nagłówki sekcji w `display` (900, jak „Kontakt” na stronie), jedno-dwa słowa, pod nimi belka `rule-w` × `rule-h` w `ink`. Dane kontaktowe i rejestrowe w `contact`, etykiety (NIP, REGON, imię i nazwisko) w wadze 700.
- Aplikacje: nagłówek strony to dwie linie, lekka `h1` nad mocną `h1-strong`, jak w logo lekkie imię nad mocnym nazwiskiem. Wyróżnienie w zdaniu to waga 700 w kolorze `ink`, nigdy kolor.
- Liczby: `metric-xl` (jedna na ekran) i `metric` (w kartach), zawsze `font-variant-numeric: tabular-nums`. Format polski: spacja tysięcy, przecinek dziesiętny.
- Eyebrow i nagłówki kolumn w `label`, WERSALIKAMI, kolor `muted`.

## Treść i ton

- Język: polski. Zdania krótkie, nagłówki jedno- lub dwuwyrazowe (wzór ze strony: „Kontakt”).
- Wielkość liter: zdania i nagłówki zaczynaj wielką literą, reszta małymi. Nazwy aplikacji zawsze małymi („i2c checker”).
- Przyciski to czasowniki w trybie rozkazującym: „Sprawdź stronę”, „Eksportuj PDF”.
- Bez emoji, bez wykrzykników w interfejsie.
- Myślnik to zwykły łącznik „-”, nie pauza.
- Dane rejestrowe (NIP, REGON, adres) podawaj dokładnie tak jak na stronie i wizytówce.

## Układ, odstępy, promienie, linie

- Siatka 4px: `space-1` (4) do `space-10` (128). Karta ma padding `space-5`, karty w siatce dzieli `space-4`, sekcje widoku `space-7`, sekcje i2c.pl `space-9`.
- Promienie aplikacji: chip `radius-xs`, przycisk i input `radius-sm`, kafel `radius-md`, karta `radius-lg`. Marka: `radius-0`.
- Warstwy rozróżnia jasność tła (`canvas` pod `surface` pod `surface-raised`) i linia 1px `line`. Cienia `shadow-float` używaj tylko dla elementów pływających (tooltip, AskBar).
- Kontrolki, które trzeba zobaczyć (input, przycisk secondary), mają obrys `line-strong` (min. 3:1).
- Fokus: 2px solid `focus` z odstępem 2px. W obu motywach ma co najmniej 3:1 na każdym tle, na którym ląduje.

## Wykresy

- Cienkie słupki (2-4px, odstęp 3px) zamiast wypełnionych obszarów. Historia `faint`, bieżący okres `ink`, jeden wyróżniony punkt w akcencie aplikacji.
- Osie i legenda w `caption`, kolor `muted`. Bez siatki poziomej albo bardzo delikatnie w `line`.
- Wartość, której dotyczy wykres, stoi nad nim jako `metric` z chipem zmiany.

## Motyw graficzny: rozbity znak

- Na stronie i2c.pl elementy znaku (kropka, kreska „i”, łuk „c”, „2” z kropką) są powiększone, rozrzucone i przycięte krawędzią ekranu. Pliki `i2c-motif-dark.svg` i `i2c-motif-light.svg` (grupa Motif) odtwarzają układ ze strony w proporcji 1920 × 700.
- Grubość kreski to `motif-stroke` (80px przy 1920px). Skaluj całość, nie zmieniaj proporcji elementów.
- Motyw tylko w trybie marki, w `ink` na `paper`. Nigdy pod tekstem, nigdy w kolorze akcentu, nigdy w aplikacji poza ekranem powitalnym.

## Ikonografia

- W materiałach źródłowych nie ma zestawu ikon. Do czasu decyzji używaj ikon liniowych 24 × 24, kreska 1,8px, zaokrąglone końce, `stroke="currentColor"` (styl zgodny z Lucide). To zastępstwo, nie element marki.
- Ikona w przycisku ma 16px. Przycisk z samą ikoną zawsze ma `aria-label`.

## Zasoby webowe

- Grupa Web: favicony (`favicon-<app>.svg` + PNG 32 px), ikony Apple 180 px i obrazki Open Graph 1200 × 630 dla i2c.pl, i2c checker i i2c know-how. Gotowy fragment `<head>` jest w README grupy Web.
- Obrazek OG marki głównej jest czarno-biały z motywem. Obrazki aplikacji mają panel w kolorze aplikacji; ich nagłówki to tekst zastępczy do podmiany.

## Implementacja (np. strona z Claude Code)

- Załaduj `tokens.css`, `i2c.css` i `i2c.js` z tego folderu. Na `<html>` ustaw `data-theme="light"` lub `"dark"` (bez atrybutu motyw idzie za ustawieniem systemu) oraz `data-app="<nazwa aplikacji>"`.
- Style tekstu z tokenów to klasy `.i2c-t-<nazwa>`, np. `.i2c-t-h1`, `.i2c-t-body`, `.i2c-t-label`.
- Logo w pasku: `I2C.app("checker", 24)`. Stopka: `I2C.lockup()`. Favicon i ikona aplikacji: pliki z `assets/Web` i `assets/AppIcons`.
- Klasy komponentów mają prefiks `i2c-` (`i2c-btn`, `i2c-card`, `i2c-pills`, `i2c-bars` …). Wzorcowy kod każdego komponentu jest w `examples/`. Wartości zawsze przez zmienne z tokenów, nigdy wpisane na sztywno.
