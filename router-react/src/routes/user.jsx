import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/user.module.scss";

export default function User() {
  let { user } = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  return (
    <div className={styles.container}>
      <h2>{userData.firstName}</h2>
      <h2>{userData.lastName}</h2>
      <img src={userData.image} alt="img" />
      <p>{userData.description}</p>
    </div>
  );
}
