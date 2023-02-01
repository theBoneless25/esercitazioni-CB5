export default function User({ id }) {
  return <h1>Page: {id}</h1>;
}

export async function getStaticProps() {
  const res = await fetch(`https://dummyjson.com/users`);
  const data = await res.json();

  return {
    props: {
      users: data.users,
    },
  };
}
