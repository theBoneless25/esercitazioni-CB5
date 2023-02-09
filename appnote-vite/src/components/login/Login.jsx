import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import styles from "./index.module.scss";

const Login = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SELECT_USER", payload: username });
  };

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Nome utente..."
        />
        <input type="submit" value="Entra" />
      </form>
    </div>
  );
};

export default Login;
