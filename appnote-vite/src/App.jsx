import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import AddNewNotes from "./components/addNewNotes";
import Login from "./components/login";
import CardNotes from "./components/cardNotes";
import { ApplicationCtx } from "./store/state";
import { useReducer } from "react";
import { initialState } from "./store/state";
import { mainReducer } from "./store/mainReducer";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {!state.user.username && !localStorage.getItem("Note-app-username") ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <main className={styles.main}>
              <AddNewNotes />
              <CardNotes />
            </main>
          </>
        )}
      </ApplicationCtx.Provider>
    </div>
  );
}

export default App;
