import "./App.css";
import NewMessage from "./components/newMessage";
import MessagesList from "./components/messagesList";
import FriendsList from "./components/friendsList";
import NavBar from "./components/navbar/index";

function App() {
  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList />
      </div>
      <div className="mainSection">
        <NewMessage />
        <MessagesList />
      </div>
    </div>
  );
}

export default App;
