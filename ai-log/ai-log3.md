Jurnal utilizare AI - Laborator 3 (Componente React, props și state)
Proiect: City Explorer

1. Pierderea stării la trimiterea formularului (Refresh automat)

Problema întâmpinată: Când completam câmpurile pentru a adăuga un oraș nou și apăsam butonul „Adaugă”, pagina primea brusc refresh. 
Aplicația se reseta la starea inițială și pierdeam destinația nou introdusă.

Prompt utilizat: „Când dau submit la formularul de adăugare, pagina dă refresh. Cum opresc acest comportament?”

Soluția oferită de AI: AI-ul mi-a amintit de comportamentul implicit al etichetei HTML <form> și m-a îndrumat să adaug comanda event.preventDefault() pe prima linie a funcției handleSubmit din componenta FormularDestinatie.jsx, prevenind astfel reîncărcarea paginii.

2. Transmiterea funcțiilor pe mai multe niveluri (Cerința suplimentară)

Problema întâmpinată: Am vrut să implementez cerința opțională cu butonul de ștergere, dar m-am blocat la modul în care o funcție definită sus (în App.jsx) poate ajunge să fie folosită tocmai jos, în interiorul unui singur card.

Prompt utilizat: „Vreau să fac cerința opțională de ștergere. Am scris stergeDestinatie în App.jsx, cum o trimit către butonul roșu din interiorul DestinatieCard?”

Soluția oferită de AI: Mi-a explicat practic cum datele (în acest caz, o funcție) „coboară” prin props. Mi-a arătat pașii: transmiterea funcției onDelete ca atribut din App către ListaDestinatii, preluarea ei în parametri acolo, și transmiterea ei mai departe către DestinatieCard, unde să poată fi pusă pe onClick.