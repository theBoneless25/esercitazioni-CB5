import styles from "./App.module.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <img
        src="https://www.pngplay.com/wp-content/uploads/1/Instagram-Logo-Background-PNG-Image.png"
        alt="logo"
      />
      <Link to="/user">GUARDA ALCUNI DEI NOSTRI UTENTI!</Link>
    </div>
  );
}

export default App;
