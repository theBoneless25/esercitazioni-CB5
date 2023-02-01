import styles from "../../styles/Page.module.scss";

export default function Post({ users }) {
  return (
    users &&
    users.map((user) => (
      <div className={styles.cardPages}>
        <h4 className={styles._user} key={user.id}>
          {user.firstName} {user.lastName}
        </h4>
      </div>
    ))
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return {
    props: {
      users: data.users,
    },
  };
}
