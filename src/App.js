import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);

  return (
    <div className="App">
      <div style={{ background: color }}>Generated Color: {color}</div>
      <button onClick={() => setColor(randomColor)}>Generate</button>
    </div>
  );
}
