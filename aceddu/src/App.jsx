import "./App.css";
import { useState, useEffect } from "react";
import NewMessage from "./components/newMessage";
import MessagesList from "./components/messagesList";
import FriendsList from "./components/friendsList";
import Filter from "./components/filter";
import Button from "./components/button";
import Modal from "./components/modal";
import FriendModal from "./components/friendModal";
import Login from "./components/login";

function App() {
  const [user, setUser] = useState();
  const [filterState, setFilterState] = useState("");
  const [isModalDisactive, setModalDisactive] = useState(false);
  const [modalContent, setModal] = useState("NewMessage");

  const onHandleModal = () => {
    setModalDisactive((prev) => !prev);
    setModal("NewMessage");
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(JSON.parse(localStorage.getItem("username")).username);
    }
  }, []);

  return user ? (
    <div className="App">
      <div className="friendsSection">
        <FriendsList
          setModal={setModal}
          setModalDisactive={setModalDisactive}
        />
      </div>
      <div className="mainSection">
        {isModalDisactive && (
          <Modal setModalDisactive={setModalDisactive}>
            {modalContent === "NewMessage" ? (
              <NewMessage setModalDisactive={setModalDisactive} />
            ) : (
              <FriendModal friendId={modalContent} />
            )}
          </Modal>
        )}

        <Filter setFilterState={setFilterState} />
        <MessagesList nPost={"full"} filterSearch={filterState} />
      </div>
      <div className="popularSection">
        <MessagesList nPost={10} />
      </div>
      <Button isModalDisactive={isModalDisactive} func={onHandleModal} />
    </div>
  ) : (
    <>
      <Login />
    </>
  );
}

export default App;
