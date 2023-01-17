import { useEffect } from "react";
import { useState } from "react";
import { POST } from "../../utils/http";
import "./index.css";

const NewMessage = () => {
  const [msgText, setMsgText] = useState("");
  const [userText, setUserText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [imgText, setImgText] = useState("");

  const onHandleMsgText = (e) => setMsgText(e.target.value);
  const onHandleUserText = (e) => setUserText(e.target.value);
  const onHandleTitleText = (e) => setTitleText(e.target.value);
  const onHandleImgText = (e) => setImgText(e.target.value);

  const [messagePost, setMessagePost] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      image: imgText,
      firstName: userText,
      title: titleText,
      body: msgText,
    });
  };

  useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost).then(() => console.log("POST EFFETTUATA"));
  }, [messagePost]);

  return (
    <div className="NewMessage">
      <form className="form" onSubmit={onSubmit}>
        <input
          value={msgText}
          onChange={onHandleMsgText}
          type="text"
          placeholder="Raccontaci la tua giornata!"
          name="text"
          className="form_input"
          required
        />
        <input
          value={userText}
          onChange={onHandleUserText}
          type="text"
          placeholder="Come ti chiami?"
          className="form_input"
          required
        />
        <input
          value={titleText}
          onChange={onHandleTitleText}
          type="text"
          placeholder="Raccontaci qualcosa di nuovo!"
          className="form_input"
          required
        />
        <input
          value={imgText}
          onChange={onHandleImgText}
          type="text"
          placeholder="Carica la tua immagine.."
          className="form_input"
          required
        />
        <input type="submit" value="Pubblica" className="button_form" />
      </form>
    </div>
  );
};

export default NewMessage;
