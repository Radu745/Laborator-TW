export default function DestinatieCard({ destinatie, onToggle, onDelete }) {
  // Extragem datele din obiectul destinatie pentru a le folosi mai ușor
  const { id, oras, tara, zile, vizitat } = destinatie;
  
  return (
    <article className={vizitat ? 'card vizitat' : 'card'}>
      <h3>{oras}</h3>
      <p className="tara">{tara}</p>
      <p className="zile">{zile} zile</p>
      
      {/* Butonul de marcare/demarcare vizitat */}
      <button type="button" onClick={() => onToggle(id)}>
        {vizitat ? 'Vizitat' : 'Marchează vizitat'}
      </button>
      
      {/* Butonul nou pentru ștergere */}
      <button 
        type="button" 
        onClick={() => onDelete(id)} 
        style={{ marginTop: '0.5rem', background: '#dc2626' }}
      >
        Șterge
      </button>
    </article>
  );
}