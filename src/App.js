import './App.css';

function App() {
  return <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>;
}

export default App;
