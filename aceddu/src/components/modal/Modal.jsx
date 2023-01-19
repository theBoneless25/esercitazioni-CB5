import { useRef } from "react";
import "./index.css";

const Modal = ({ children, setModalDisactive }) => {
  const refModal = useRef(null);

  const onHandleModal = () => setModalDisactive(false);

  const onHandleClick = () => refModal.current.classList.toggle("modal-active");

  return (
    <div className="Modal" ref={refModal}>
      <div className="content" onClick={onHandleClick}>
        {children}
      </div>
      <div className="overlay" onClick={onHandleModal}></div>
    </div>
  );
};

export default Modal;
