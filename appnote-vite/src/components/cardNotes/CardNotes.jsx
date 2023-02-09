import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import ListNotes from "../listNotes";
import styles from "./index.module.scss";

const CardNotes = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleSearch = (e) => {
    dispatch({ type: "SEARCH_NOTE", payload: e.target.value });
  };

  return (
    <div className={styles.NoteContent}>
      <h2>Note :</h2>
      <input
        onInput={onHandleSearch}
        type="text"
        id="search"
        name="search"
        placeholder="Cerca tra le tue vecchie Note.."
      />
      <ListNotes />
    </div>
  );
};

export default CardNotes;
