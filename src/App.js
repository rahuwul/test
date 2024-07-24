import React, { useState, useEffect } from 'react'

export default function App() {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setText(data.text))
      .catch(e => setError(e.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <h1>fetched message: <h1 style={{color:'blue'}}>{text}</h1></h1>
  )
}