import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import styles from "./index.module.scss";

const NotesItems = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClick = () => {
    dispatch({ type: "DELETE_NOTE", payload: data.id });
  };

  return (
    <div className={styles.containerNote}>
      <div className={styles.NoteItem}>
        <p>{data.id}</p>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <button onClick={onHandleClick}>X</button>
      </div>
    </div>
  );
};

export default NotesItems;
