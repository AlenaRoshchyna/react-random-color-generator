/* import './App.css'; */

export default function App() {
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return (
    <div className="App">
      <div>Generated Color: {generateColor}</div>
      <button>Generate</button>
    </div>
  );
}
