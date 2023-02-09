import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import styles from "./index.module.scss";

const AddNewNotes = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_NOTES",
      payload: {
        id: Math.floor(Math.random() * 100),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
  };

  return (
    <div className={styles.AddNewNote}>
      <h2>Scrivi una nuova Nota..</h2>
      <form onSubmit={onHandleSubmit}>
        <input
          className={styles.inputText}
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          placeholder="Es. Domenica 02/02/2023"
          required
        />
        <input
          className={styles.inputText}
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          placeholder="Es. Passeggiate in bici con amici al parco"
          required
        />
        <input className={styles.button} type="submit" value="+" />
      </form>
    </div>
  );
};

export default AddNewNotes;
