import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import NotesItems from "../noteItems";
import styles from "./index.module.scss";

const ListNotes = () => {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={styles.NoteList}>
      {state.noteList.map((note) => (
        <NotesItems data={note} key={note.id} />
      ))}
    </div>
  );
};

export default ListNotes;
