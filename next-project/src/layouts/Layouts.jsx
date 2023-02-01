import styles from "./index.module.scss";
import NavBar from "../components/navbar";

const Layouts = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layouts;
