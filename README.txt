
MENU FIX – JAK POUŽÍT (BEZ ROZBITÍ WEBU)

1) Nahraj soubor `menu-fix.css` do stejné složky, kde máš `styles.css`.

2) Otevři svůj `styles.css` a na KONEC přidej:
   @import url('./menu-fix.css');

   (tím se fix aplikuje bez přepisování zbytku stylů)

3) Ve všech stránkách najdi menu a nahraď ho obsahem ze souboru `header-snippet.html`.
   DŮLEŽITÉ: odstraň jakýkoli vnořený <ul class="submenu">…</ul>.

4) Ulož, nahraj na server a udělej Ctrl+F5.

Výsledek:
- 1. řádek: Úvod | Zimní zahrady Praha | Typy zahrad | Zastřešení bazénů
- 2. řádek: Zasklívání balkónů | Okna a dveře | Ceník | Kontakt | Poptávka zdarma
- žádné odrážky (submenu je vypnuté)
- zarovnání sedí

Pokud by se něco ještě tlouklo, napiš – ale tohle je drop‑in fix bez zásahu do zbytku webu.
