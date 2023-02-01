import styles from "./index.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/post">Lista Utenti</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/users">Utente</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
