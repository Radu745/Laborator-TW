Jurnal utilizare AI - Laborator 2 (Vite și JavaScript modern)
Proiect: City Explorer

1. Rezolvarea erorilor de mediu (PowerShell)

Problema întâmpinată: La rularea comenzii npm create vite@latest pentru inițializarea proiectului, am primit o eroare de sistem în terminal.

Prompt utilizat: [Am încărcat captura de ecran cu eroarea] "Cum rezolv eroarea cannot be loaded because running scripts is disabled on this system?"

Soluția oferită de AI: AI-ul m-a ghidat să modific politica de execuție a scripturilor din Windows, folosind comanda Set-ExecutionPolicy -Scope CurrentUser RemoteSigned direct în PowerShell, ceea ce a permis instalarea pachetelor. Alternativ, mi-a sugerat să folosesc Command Prompt (cmd) unde această restricție nu se aplică.

2. Structurarea modulelor și importul fișierelor

Problema întâmpinată: După ce am creat folderele necesare (data, utils, api), nu eram sigur cum trebuie corelate fișierele între ele, astfel încât funcțiile scrise în utils să poată procesa datele aduse din api sau din folderul data.

Prompt utilizat: "Am făcut curățenie în proiect și am creat cele 3 foldere. Cum continui pașii pentru a lega fișierul de date de funcțiile de prelucrare și de fișierul principal?"

Soluția oferită de AI: AI-ul mi-a explicat mecanismul de import/export din JavaScript modern. M-a ajutat să înțeleg cum să folosesc export const pentru fiecare funcție individuală în src/utils/destinatii.js și cum să centralizez toate importurile la finalul fișierului src/main.jsx pentru a rula testele și a afișa rezultatele în consolă.