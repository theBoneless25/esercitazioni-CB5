import "./App.css";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import NavBar from "./components/navbar/index";

function App() {
  return (
    <div className="App">
      <NewMessage />
      <MessagesList />
    </div>
  );
}

export default App;
