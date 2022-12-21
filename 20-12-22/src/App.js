import "./App.css";
import { Button } from "./components/button/Button";
import { Text } from "./components/text/Text";

function App() {
  const customColor = "blue";

  return (
    <div className="App">
      <Text as="h1" style={{ color: customColor }} variant="title">
        CIAO BELLI!
      </Text>
      <Button
        aria-label="Non toccare!"
        variant="pippo"
        className="no-border"
        onClick={() => console.log("Perchè hai premuto questo pulsante?!?")}
      >
        Non premere!
      </Button>
      <Button
        variant="primary"
        aria-label="Useless button"
        onClick={() => console.log("Bravo hai scelto il pulsante giusto!!")}
      >
        Premi questo
      </Button>
    </div>
  );
}

export default App;
