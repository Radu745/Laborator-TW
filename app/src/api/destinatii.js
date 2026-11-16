const API_URL = 'http://localhost:3002';

export async function getDestinatii(pagina = 1, limita = 20) {
  const response = await fetch(`${API_URL}/destinatii?_page=${pagina}&_per_page=${limita}`);
  if (!response.ok) {
    throw new Error(`Serverul a răspuns cu ${response.status}`);
  }
  return response.json();
}

// 2. Adăugarea unei destinații noi (POST)
export async function postDestinatie(d) {
  const response = await fetch(`${API_URL}/destinatii`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(d)
  });
  if (!response.ok) {
    throw new Error(`Serverul a răspuns cu ${response.status}`);
  }
  return response.json();
}

// 3. Actualizarea parțială a stării "vizitat" (PATCH)
export async function patchVizitat(id, vizitat) {
  const response = await fetch(`${API_URL}/destinatii/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ vizitat })
  });
  if (!response.ok) {
    throw new Error(`Serverul a răspuns cu ${response.status}`);
  }
  return response.json();
}

// 4. Ștergerea unei destinații (DELETE)
export async function deleteDestinatie(id) {
  const response = await fetch(`${API_URL}/destinatii/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Serverul a răspuns cu ${response.status}`);
  }
  return response.json();
}