import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message";
import "./index.css";

const MessagesList = ({ nPost, filterSearch }) => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      nPost === "full"
        ? setMsgList(posts.filter((post) => post.title.includes(filterSearch)))
        : setMsgList(posts.filter((post) => post.id <= nPost))
    );
  }, [filterSearch]);

  return (
    <div className="MessagesList">
      {msgList.map((msg) => (
        <Message
          data={msg}
          textContent={nPost === "full" ? "full" : "partial"}
          key={msg.id}
        />
      ))}
    </div>
  );
};

export default MessagesList;
