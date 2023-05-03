import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);
  const [hueColor, setHueColor] = useState('');
  const [luminosityColor, setLuminosityColor] = useState('');
  return (
    <div className="App">
      <div style={{ background: color }}>Generated Color: {color}</div>
      <button
        onClick={() =>
          setColor(randomColor({ hue: hueColor, luminosity: luminosityColor }))
        }
      >
        Generate
      </button>
      <br />
      <label htmlFor="hueColor">Hue:</label>
      <input
        value={hueColor}
        onChange={(event) => {
          setHueColor(event.currentTarget.value);
        }}
      />
      <br />
      <label htmlFor="luminosityColor">Luminosity:</label>
      <input
        value={luminosityColor}
        onChange={(event) => {
          setLuminosityColor(event.currentTarget.value);
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
