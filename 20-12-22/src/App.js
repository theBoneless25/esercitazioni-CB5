import "./App.css";
import { Button } from "./atoms/button/Button";
import { Text } from "./atoms/text/Text";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Container } from "./layout/container/Container";

function App() {
  const customColor = "gray";

  return (
    <div className="App">
      <Header />
      <main>
        <Container withRow={0}>
          <Text as="h1" style={{ color: customColor }} variant="title">
            Fai la tua Scelta!!
          </Text>
        </Container>
        <div className="App_button">
          <Button
            style={{ background: "green" }}
            aria-label="Non toccare!"
            variant="pippo"
            className="no-border"
            onClick={() => console.log("Mi dispiace pulsante errato!Riprova!")}
          >
            BUTTON 1
          </Button>
          <Button
            variant="primary"
            aria-label="Useless button"
            onClick={() => console.log("Mi dispiace pulsante errato!Riprova!")}
          >
            BUTTON 2
          </Button>
          <Button
            style={{ background: "red" }}
            aria-label="Useless button"
            onClick={() => console.log("Bravo hai scelto il pulsante giusto!!")}
          >
            BUTTON 3
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
