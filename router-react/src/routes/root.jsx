import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Root() {
  const [user, setUser] = useState([]);

  const { users } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);
  return (
    <>
      {user.map((user) => (
        <>
          <Link to={`/users/${user.id}`}>
            <div>
              <h4>{user.firstName}</h4>
              <h4>{user.lastName}</h4>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}
