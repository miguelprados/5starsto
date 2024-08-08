import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    const { data } = await axios.post('/.netlify/functions/shorten', { longUrl });
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="App">
      <h1>Generador de Enlaces Cortos</h1>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Pega el enlace de Google aquí"
      />
      <button onClick={handleSubmit}>Generar Enlace Corto</button>
      {shortUrl && <p>Enlace Corto: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
}

export default App;

