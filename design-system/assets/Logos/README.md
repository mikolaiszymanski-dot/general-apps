Logo i2c odzyskane jako wektor z pliku drukarskiego wizytówek (PRINT_Businesscards_90x50mm, 19.12.2019). Znak i podpis to oryginalne krzywe, nie tekst.

- `i2c-lockup-black.svg` / `i2c-lockup-white.svg`: logo główne (znak + „Mikołaj Szymański”). Kolor: czerń `#000000` (`ink`) lub biel `#ffffff` (`paper`).
- `i2c-mark-black.svg` / `i2c-mark-white.svg`: sam znak, gdy brakuje miejsca albo nazwisko jest już obok (favicon, stopka, awatar).
- `i2c-checker-*.svg`, `i2c-know-how-*.svg`: lockupy aplikacji. Nazwa aplikacji w Mulish 700 zamieniona na krzywe; wysokość liter 55% wysokości znaku, odstęp 39% wysokości znaku.
- `i2c-lockup-print-141111.svg`: logo w czerni `#141111` z pliku drukarskiego. Tylko do druku, na ekranie używaj `i2c-lockup-black.svg`.
- Pliki są jednobarwne i nie dziedziczą koloru w `<img>`. Na stronie wstawiaj logo przez `I2C.mark()`, `I2C.lockup()`, `I2C.app()`, które używają `currentColor`.
