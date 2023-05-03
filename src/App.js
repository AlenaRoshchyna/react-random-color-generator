import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);
  const [hueColor, setHueColor] = useState('');
  return (
    <div className="App">
      <div style={{ background: color }}>Generated Color: {color}</div>
      <button
        onClick={() =>
          setColor(randomColor({ hue: hueColor, luminosity: 'light' }))
        }
      >
        Generate
      </button>
      <br />
      <input
        value={hueColor}
        onChange={(event) => {
          setHueColor(event.currentTarget.value);
        }}
      />
    </div>
  );
}

/* const hue = process.argv[2];
const luminosity = process.argv[3];
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
}); */
