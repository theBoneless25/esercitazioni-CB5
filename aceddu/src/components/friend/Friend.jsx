import "./index.css";

const Friend = ({ data, setModal, setModalDisactive }) => {
  const { id, image, firstName, lastName, address } = data;

  const onHandleClick = () => {
    setModal(id);
    setModalDisactive(true);
  };

  return (
    <main className="Friend" onClick={onHandleClick} id={id}>
      <img src={image} alt={lastName} />
      <section className="Friend__text">
        <h3>{`${firstName}`}</h3>
        <h4>{address.city}</h4>
      </section>
    </main>
  );
};

export default Friend;
