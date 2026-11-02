import { useState } from 'react';
import { destinatii as destinatiiInitiale } from './data/destinatii.js';
import { getNevizitate, totalZile, marcheazaVizitat, adaugaDestinatie, stergeDestinatie } from './utils/destinatii.js';
import Rezumat from './components/Rezumat.jsx';
import FormularDestinatie from './components/FormularDestinatie.jsx';
import ListaDestinatii from './components/ListaDestinatii.jsx';
import './App.css';

export default function App() {
  // Starea aplicației (aici se ține lista de destinații)
  const [destinatii, setDestinatii] = useState(destinatiiInitiale);

  // Calculele pentru componenta Rezumat
  const nevizitate = getNevizitate(destinatii);
  const numarNevizitate = nevizitate.length;
  const numarTotalZile = totalZile(nevizitate);

  // Funcția pentru bifarea unei destinații
  function handleToggle(id) {
    setDestinatii((curent) => marcheazaVizitat(curent, id));
  }

  // Funcția pentru adăugarea unei destinații din formular
  function handleAdd(nouaDestinatie) {
    setDestinatii((curent) => adaugaDestinatie(curent, nouaDestinatie));
  }

  // Funcția suplimentară pentru ștergere
  function handleDelete(id) {
    setDestinatii((curent) => stergeDestinatie(curent, id));
  }

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat 
        total={destinatii.length} 
        nevizitate={numarNevizitate} 
        zile={numarTotalZile} 
      />
      <FormularDestinatie onAdd={handleAdd} />
      <ListaDestinatii 
        destinatii={destinatii} 
        onToggle={handleToggle} 
        onDelete={handleDelete}
      />
    </main>
  );
}