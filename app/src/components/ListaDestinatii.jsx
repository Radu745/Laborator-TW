import DestinatieCard from './DestinatieCard.jsx';

export default function ListaDestinatii({ destinatii, onToggle, onDelete }) {
  // Dacă lista e goală, afișăm mesajul informativ
  if (destinatii.length === 0) {
    return <p className="info">Nu există nicio destinație.</p>;
  }

  // Altfel, parcurgem lista cu map și desenăm un card pentru fiecare
  return (
    <div className="lista">
      {destinatii.map((destinatie) => (
        <DestinatieCard 
          key={destinatie.id} 
          destinatie={destinatie} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}