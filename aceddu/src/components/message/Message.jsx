import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Message = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="container_Message">
      <img src={user.image} alt={user.firstName} />
      <div className="Message__textContent">
        <p>
          @{user.firstName}
          {user.lastName}
        </p>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Message;
