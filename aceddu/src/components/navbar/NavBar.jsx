import { useState, useEffect } from "react";
import "./index.css";

const NavBar = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(JSON.parse(sessionStorage.getItem("username")));
  }, []);

  const onLogout = () => {
    sessionStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div className="Navbar">
      <img
        src="https://img.pixers.pics/pho(s3:400/FO/51/05/94/89/400_FO51059489_2d4a6189757e211aac4e47cfec3ca1fb.jpg,60,60,png)/federe-per-cuscini-cute-cartoon-uccello-blu.jpg.png"
        alt="logo"
      />
      <ul>
        <li onClick={onLogout} className="username">
          {username ? (
            <img src={username.imgProfile} alt="user-img" />
          ) : (
            "Login"
          )}
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Friends</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
