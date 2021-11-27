import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children }) => {
  const el = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(children, el);
};
