import { useState, useEffect } from "react";
import { POST } from "../../utils/http";
import "./index.css";

const NewMessage = () => {
  const [posts, setPosts] = useState([]);
  const [msgText, setMsgText] = useState("");
  const [msgTitle, setMsgTitle] = useState("");

  const onHandleInput = (e) => setMsgText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`https://dummyjson.com/posts`, {
      method: "POST",
      body: JSON.stringify({
        /*title: title,
        body:body, */
        userId: Math.random().toString(32).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        setPosts((posts) => [post, ...posts]);
        setMsgTitle("");
        setMsgText("");
      })
      .catch((err) => {
        console.log(err, "Errore");
      });
  };

  return (
    <div className="NewMessage">
      <form className="form" onSubmit={onSubmit}>
        <input
          value={msgText}
          onChange={onHandleInput}
          type="text"
          placeholder="Username"
          name="text"
          className="form_input"
        />
        <div
          id="drop_zone;"
          ondrop="dropHandler(event);"
          ondragover="dragOverHandler(event)"
        >
          <p>Carica la tua immagine profilo</p>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
        <input
          value={msgTitle}
          onChange={onHandleInput}
          type="text"
          placeholder="Titolo"
          name="text"
          className="form_input"
        />
        <input
          value={posts}
          onChange={onHandleInput}
          type="text"
          placeholder="Raccontaci la tua giornata!"
          name="text"
          className="form_input"
        />
        <button className="button_form">Pubblica</button>
      </form>
    </div>
  );
};

export default NewMessage;
