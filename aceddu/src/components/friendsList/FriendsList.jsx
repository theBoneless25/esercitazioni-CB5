import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import Filter from "../filter";
import "./index.css";

const FriendsList = ({ setModal, setModalDisactive }) => {
  const [friendsList, setFriendsList] = useState([]);
  const [filterState, setFilterState] = useState("");

  useEffect(() => {
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      <Filter setFilterState={setFilterState} />
      {friendsList
        .filter((friend) => friend.firstName.includes(filterState))
        .map((friend) => (
          <Friend
            data={friend}
            setModal={setModal}
            setModalDisactive={setModalDisactive}
            key={friend.id}
          />
        ))}
    </div>
  );
};

export default FriendsList;
