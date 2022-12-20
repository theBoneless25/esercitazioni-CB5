import "./App.css";
import { Button } from "./components/Button";

function App() {
  const text = "CIAO BELLI!!";
  return (
    <div className="App">
      <h1>{text}</h1>
      <Button />
    </div>
  );
}

export default App;
