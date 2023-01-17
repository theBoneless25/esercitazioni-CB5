import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName, address } = data;
  return (
    <main className="Friend">
      <img src={image} alt={lastName} />
      <section className="Friend__text">
        <h3>{`${firstName}`}</h3>
        <h4>{address.city}</h4>
      </section>
    </main>
  );
};

export default Friend;
