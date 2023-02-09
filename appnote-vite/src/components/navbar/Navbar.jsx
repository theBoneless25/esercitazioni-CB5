import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import { GrNotes } from "react-icons/gr";
import styles from "./index.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onLogout = () => {
    localStorage.removeItem("Note-app-username");
    dispatch({ type: "REMOVE_USER" });
  };
  return (
    <div className={styles.Navbar}>
      <p>
        <GrNotes />
      </p>
      <h2>{state.user.username}</h2>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
};

export default Navbar;
