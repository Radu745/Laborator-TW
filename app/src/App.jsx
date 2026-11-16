import { useState, useEffect } from 'react'
import { getNevizitate, totalZile } from './utils/destinatii.js'
import { getDestinatii, patchVizitat, deleteDestinatie } from './api/destinatii.js'
import ListaDestinatii from './components/ListaDestinatii.jsx'
import FormularDestinatie from './components/FormularDestinatie.jsx'
import Rezumat from './components/Rezumat.jsx'
import Cautare from './components/Cautare.jsx'
import PanouStatistici from './components/PanouStatistici.jsx'
import './App.css'

export default function App() {
  const [destinatii, setDestinatii] = useState([])
  const [incarcare, setIncarcare] = useState(true)
  const [eroare, setEroare] = useState(null)
  const [cautare, setCautare] = useState('')
  const [pagina, setPagina] = useState(1)
  const limita = 20

  // Încărcarea datelor cu paginare
  useEffect(() => {
    async function incarca() {
      try {
        setIncarcare(true)
        setEroare(null)
        const raspuns = await getDestinatii(pagina, limita)
        
        // Verificăm dacă json-server a returnat un obiect { data: [...] } sau direct un array
        const dateReale = (raspuns && raspuns.data) ? raspuns.data : raspuns
        
        setDestinatii(Array.isArray(dateReale) ? dateReale : [])
      } catch (error) {
        setEroare(error.message)
      } finally {
        setIncarcare(false)
      }
    }
    incarca()
  }, [pagina])

  // Marcarea unei destinații ca vizitate
  async function handleToggle(id) {
    const dest = destinatii.find((d) => d.id === id)
    if (!dest) return

    try {
      const salvata = await patchVizitat(id, !dest.vizitat)
      setDestinatii((curent) => curent.map((d) => (d.id === id ? salvata : d)))
    } catch (err) {
      console.error(err.message)
    }
  }

  // Adăugarea unei destinații
  function handleAdd(salvata) {
    if (pagina === 1) {
      setDestinatii((curent) => [salvata, ...curent])
    }
  }

  // Ștergerea unei destinații
  async function handleDelete(id) {
    try {
      await deleteDestinatie(id);
      setDestinatii((curent) => curent.filter((d) => d.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  const nevizitate = getNevizitate(destinatii)

  // Filtrarea listei de pe pagina curentă
  const text = cautare.trim().toLowerCase()
  const afisate = destinatii.filter(
    (d) =>
      d.oras.toLowerCase().includes(text) ||
      d.tara.toLowerCase().includes(text)
  )

  return (
    <main>
      <h1>City Explorer</h1>
      <PanouStatistici />
      
      {incarcare && <p className="stare">Se încarcă destinațiile...</p>}
      {eroare && <p className="stare eroare">A apărut o eroare: {eroare}</p>}
      
      {!incarcare && !eroare && (
        <>
          <Rezumat
            total={destinatii.length}
            nevizitate={nevizitate.length}
            zile={totalZile(nevizitate)}
          />
          <FormularDestinatie onAdd={handleAdd} />
          
          <Cautare valoare={cautare} onChange={setCautare} />

          {/* Afișare mesaje pentru liste goale */}
          {destinatii.length === 0 && (
            <p className="gol">
              Nu există nicio destinație pe această pagină.<br />
              Adaugă prima din formular.
            </p>
          )}

          {destinatii.length > 0 && afisate.length === 0 && (
            <p className="gol">Niciun rezultat pentru „{cautare}”.</p>
          )}

          {/* Lista de destinații */}
          {destinatii.length > 0 && afisate.length > 0 && (
            <ListaDestinatii 
              destinatii={afisate} 
              onToggle={handleToggle} 
              onDelete={handleDelete} 
            />
          )}

          {/* Controalele de paginare MUTATE JOS */}
          <div className="paginare-contor" style={{ margin: '20px 0', display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
            <button 
              onClick={() => setPagina((p) => Math.max(p - 1, 1))} 
              disabled={pagina === 1 || incarcare}
            >
              ◄ Pagina anterioară
            </button>
            <span>Pagina <strong>{pagina}</strong></span>
            <button 
              onClick={() => setPagina((p) => p + 1)} 
              disabled={incarcare || destinatii.length < limita}
            >
              Pagina următoare ►
            </button>
          </div>
        </>
      )}
    </main>
  )
}