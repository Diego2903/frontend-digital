import { Home } from "./components/Home";


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 12 }}>
      <h1>Productos</h1>
      <Home />
    </div>
  );
}

export default App;
