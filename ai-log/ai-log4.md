Jurnal utilizare AI - Laborator 4 (Integrare API, Operații CRUD și Paginare)

Proiect: City Explorer

1. Eroare fatală la rulare după implementarea paginării (Pagina albă)

Problema întâmpinată: Când am încercat să încarc cele 2000+ de înregistrări din baza de date db-mare.json folosind parametrii de paginare (_page și _limit), pagina web a devenit brusc complet albă. Nu mai apărea nicio interfață.

Prompt utilizat: „Nu mai apare nimic in browser. Uite aici codurile actuale, da-mi codurile corecte.” / (Ulterior, cu consola deschisă): „Uncaught TypeError: list.filter is not a function at getNevizitate (destinatii.js:3:45)”.

Soluția oferită de AI: AI-ul a identificat din captura de eroare că formatul datelor primite de la versiunile noi de json-server s-a schimbat atunci când se folosește paginarea (serverul returnează un obiect cu .data în loc de array direct). Mi-a rescris blocul useEffect din App.jsx pentru a verifica și extrage corect array-ul (const dateReale = (raspuns && raspuns.data) ? raspuns.data : raspuns).

2. Destinațiile nu se afișau (Erori de conexiune la server)

Problema întâmpinată: Deși aplicația nu mai crăpa, lista de destinații era goală (0 destinații), iar pe ecran apărea mesajul „Statistici indisponibile: Failed to fetch”.

Prompt utilizat: „Merge acum, dar nu apare nicio destinatie dintre cele 2000” (cu o captură de ecran care arăta erori ERR_CONNECTION_REFUSED :3001 în consolă).

Soluția oferită de AI: AI-ul a observat din captura de ecran că anumite componente (precum panoul de statistici) și fișierul destinatii.js încă încercau să ceară date de pe portul vechi (3001), care era oprit. M-a ghidat să modific global API_URL către noul port 3002, să corectez URL-ul și în interiorul PanouStatistici.jsx, și să pornesc corect serverul json într-un terminal separat pentru db-mare.json.

3. Formatarea datelor trimise pentru completarea măsurătorilor din fișă

Problema întâmpinată: Pentru a completa Tabelul 2 din fișa de laborator, aveam nevoie să testez cum arată Payload-ul trimis de client către server (metoda POST) cu și fără conversia tipului de date pentru numărul de zile.

Prompt utilizat: „Da-mi codul necesar completarii tabelului 2. Ce trebuie sa modific in app.jsx si in formulardestinatii?”

Soluția oferită de AI: Mi-a explicat cum să folosesc (și ulterior să scot, pentru testare) funcția Number(valori.zile) în momentul trimiterii datelor din formular. Mi-a arătat cum afectează acest lucru formatul JSON trimis în Payload (unde 3 este tratat corect ca numeric, iar "3" este tratat ca string dacă conversia nu are loc). Apoi a completat direct Tabelul 2 cu valorile, explicațiile și statusurile HTTP (200, 201) deduse din comportamentul aplicației.

4. Repoziționarea butoanelor de paginare (UI/UX)

Problema întâmpinată: Controalele de paginare („Pagina anterioară”, „Pagina următoare”) erau plasate deasupra listei, deși logic și estetic ele trebuiau să se afle la finalul elementelor randate.

Prompt utilizat: „Vreau ca paginarea sa apara in partea de jos a paginii web.”

Soluția oferită de AI: Mi-a returnat versiunea actualizată a fișierului App.jsx, în care a mutat blocul JSX ce conținea controalele de paginare sub componenta <ListaDestinatii/>, astfel încât să respecte o interfață naturală pentru utilizator.